import { APIGatewayEvent } from "aws-lambda";

export interface ServiceResult {
  result: string | null;
  errorCode: number | null;
}

export interface ExtendedAPIGatewayEvent extends APIGatewayEvent {
  pathParameters: {
    name?: string;
  };
}
