import { combineReducers } from "redux";
import tagReducer from "./reducers/tagReducer";
import projectReducer from "./reducers/projectReducer";

const rootReducer = combineReducers({
  tags: tagReducer,
  projects: projectReducer,
});

export default rootReducer;
