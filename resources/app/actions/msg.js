import axios from "axios"
import types from "./types"
export default {

    get(){


        return {
            type: types.GET_MSG,
            payload: axios.get("/api/messages")
        }
    },

    add(form){
        return {
            types: types.ADD_MSG,
            payload: axios.post("/api/messages", new FormData(form))
        }
    }
}