import { POST_REQUEST, POST_SUCCESS, POST_FAILURE } from "./postType";
import axios from "axios";

const fetchPostRequest = () => {
  return {
    type: POST_REQUEST,
  };
};
const fetchPostSuccess = (post) => {
  return {
    type: POST_SUCCESS,
    payload: post,
  };
};
const fetchPostFailure = (error) => {
  return {
    type: POST_FAILURE,
    payload: error,
  };
};

export const fetchPostApi = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const post = res.data;
        dispatch(fetchPostSuccess(post));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPostFailure(errorMsg));
      });
  };
};
