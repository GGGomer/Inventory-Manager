import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  msg: {},
  status: null,
  _id: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        _id: action.payload._id,
      };
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        _id: null,
      };
    default:
      return state;
  }
}
