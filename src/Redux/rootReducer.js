import { combineReducers } from "redux";
import authorReducer from "./Author/AuthorReducer";

const rootReducer = combineReducers({
    Author: authorReducer
})

export default rootReducer