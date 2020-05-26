import { APIGatewayProxyResult } from "aws-lambda";
import { OK, getStatusText } from "http-status-codes";

export const success = (result: string): APIGatewayProxyResult => ({
  statusCode: OK,
  body: JSON.stringify(result),
});

export const fail = (errorCode: number): APIGatewayProxyResult => ({
  statusCode: errorCode,
  body: JSON.stringify(getStatusText(errorCode)),
})

