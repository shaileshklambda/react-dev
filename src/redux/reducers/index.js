/*
    Uses combineReducers Utility To Combine all The Reducers.
*/

import { combineReducers } from "redux";
import postReducer from "./postReducer";
import apiReducer from "./apiReducer";
import timeline from "./timeline";
import debuggerReducer from "./debuggerReducer";
export default combineReducers({
  apiReducer,
  postReducer,
  timeline,
  debuggerReducer
});
