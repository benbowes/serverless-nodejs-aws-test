import "source-map-support/register";
import { APIGatewayProxyHandler, APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

import { success, fail } from "./src/io";
import { helloService, goodbyeService } from "./src/service";
import { ServiceResult } from "./src/types";

export const hello: APIGatewayProxyHandler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  const { result, errorCode }: ServiceResult = await helloService(event);

  return result
    ? success(result)
    : fail(errorCode);
};

export const goodbye: APIGatewayProxyHandler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  const { result, errorCode }: ServiceResult = await goodbyeService(event);

  return result
    ? success(result)
    : fail(errorCode);
};
