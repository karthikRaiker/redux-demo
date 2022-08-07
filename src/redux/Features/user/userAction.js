import {
  USER_API_REQUEST,
  USER_API_SUCCESS,
  USER_API_FAILURE,
} from "./userActionType";
import axios from "axios";

export const userApiRequest = () => {
  return {
    type: USER_API_REQUEST,
  };
};

export const userApiSuccess = (user) => {
  return {
    type: USER_API_SUCCESS,
    payload: user,
  };
};

export const userApiFailure = (error) => {
  return {
    type: USER_API_FAILURE,
    payload: error,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(userApiRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const user = res.data;

        dispatch(userApiSuccess(user));
      })
      .catch((error) => {
        const message = error.message;
        dispatch(userApiFailure(message));
      });
  };
};
