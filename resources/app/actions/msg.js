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

        return function (dispatch) {
            dispatch({
                type: types.ADD_MSG + "_PENDING",
            })
            axios.post("/api/messages", new FormData(form)).then(response => {
                dispatch({
                    type: types.ADD_MSG + "_FULFILLED",
                    payload: response
                })
            }).catch(e => {
                dispatch({
                    type: types.ADD_MSG + "_REJECTED",
                })
            })

        }
        return {
            type: types.ADD_MSG,
            payload: axios.post("/api/messages", new FormData(form))
        }
    }
}