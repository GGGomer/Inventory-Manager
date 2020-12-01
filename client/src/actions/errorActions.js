import { GET_ERRORS, CLEAR_ERRORS } from "./types";

export const returnErrors = (msg, status, _id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, _id },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
