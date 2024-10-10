import { combineReducers } from "../../../node_modules/redux/dist/redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
})

export default rootReducer;