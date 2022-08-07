import { POST_REQUEST, POST_SUCCESS, POST_FAILURE } from "./postType";

const initialState = {
  loading: true,
  post: [],
  error: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_SUCCESS:
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case POST_FAILURE:
      return {
        loading: false,
        post: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
