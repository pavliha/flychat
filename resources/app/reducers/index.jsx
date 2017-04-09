import {combineReducers} from "redux";
import msg from "./msg"
import user from "./user"
export default combineReducers({
    msg,
    user
})