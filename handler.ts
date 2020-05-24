import { APIGatewayProxyHandler, APIGatewayEvent } from "aws-lambda";
import "source-map-support/register";
import io from "./src/io";
import service from "./src/service";

export const hello: APIGatewayProxyHandler = async (event: APIGatewayEvent) => {
  const result = service.hello(event);
  return io.handlers.returnSuccess(result);
};

export const goodbye: APIGatewayProxyHandler = async (
  event: APIGatewayEvent
) => {
  const result = service.goodbye(event);
  return io.handlers.returnSuccess(result);
};
