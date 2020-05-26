import { BAD_REQUEST } from "http-status-codes";

interface CheckIfErrorParams {
  requiredParams: string[];
}

export const checkIfError = ({ requiredParams }: CheckIfErrorParams) => {
  const isRequiredParams = requiredParams.every((requiredParam) => !!requiredParam);
  return !isRequiredParams ? BAD_REQUEST : null;
};
