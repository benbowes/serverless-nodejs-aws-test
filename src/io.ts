import { APIGatewayProxyResult } from "aws-lambda";
import { OK, getStatusText } from "http-status-codes";

export default {
  success: (result: string): APIGatewayProxyResult => ({
    statusCode: OK,
    body: JSON.stringify(result),
  }),
  fail: (errorCode: number): APIGatewayProxyResult => ({
    statusCode: errorCode,
    body: JSON.stringify(getStatusText(errorCode)),
  })
};
