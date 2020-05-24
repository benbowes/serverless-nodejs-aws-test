import { APIGatewayEvent } from "aws-lambda";

interface ExtendedAPIGatewayEvent extends APIGatewayEvent {
  pathParameters: {
    name?: string;
  };
}

export default {
  hello: ({ pathParameters }: ExtendedAPIGatewayEvent) =>
    `Hello ${pathParameters.name}`,
  goodbye: ({ pathParameters }: ExtendedAPIGatewayEvent) =>
    `Goodbye ${pathParameters.name}`,
};
