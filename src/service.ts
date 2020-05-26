import { ExtendedAPIGatewayEvent, ServiceResult } from "./types";
import { checkIfError } from './utils';

export const helloService = (event: ExtendedAPIGatewayEvent): ServiceResult => {
  const errorCode = checkIfError({ requiredParams: [event.pathParameters.name] });

  return {
    errorCode,
    result: !errorCode
      ? `Hello ${event.pathParameters.name}`
      : null
  };
};

export const goodbyeService = (event: ExtendedAPIGatewayEvent): ServiceResult => {
  const errorCode = checkIfError({ requiredParams: [event.pathParameters.name] });

  return {
    errorCode,
    result: !errorCode
      ? `Goodbye ${event.pathParameters.name}`
      : null
  };
};
