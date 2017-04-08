import axios from "axios"
import types from "./types"
export default {

    get(){
        return {
            type: types.GET_MSG,
            payload: axios.get("/api/msg")
        }
    },
}