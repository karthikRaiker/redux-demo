import {
  USER_API_REQUEST,
  USER_API_SUCCESS,
  USER_API_FAILURE,
} from "./userActionType";

const initialState = {
  loading: true,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_API_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case USER_API_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
