import axios from "axios"
import types from "./types"
export default {

    get(){
        return {
            type: types.GET_USERS,
            payload: axios.get("/api/online-users")
        }
    },
}