import { combineReducers } from "redux";
import cakeReducer from "./Features/cake/cakeReducer";
import iceCreamReducer from "./Features/iceCream/iceCreamReducer";
import userReducer from "./Features/user/userReducer";
import postReducer from "./Features/post/postReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  post: postReducer,
});

export default rootReducer;
