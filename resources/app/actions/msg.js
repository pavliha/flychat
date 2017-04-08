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
            type: types.ADD_MSG,
            payload: axios.post("/api/messages", new FormData(form))
        }
    },

    addMsg(msg){
        return {
            type: types.ADD_NEW_MSG,
            payload: msg
        }
    }
}