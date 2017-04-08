import types from "../../actions/types"
import initialState from "../initialState";

const initial = {
    ...initialState,
    data:[],
    ids:[]
}
export default (state = initial, action) => {

    switch (action.type) {






        case types.GET_MSG+"_PENDING":
            return {
                ...state,
                fetching: true,
                completed:false,
            }

        case types.GET_MSG+"_FULFILLED":
            return {
                ...state,
                fetching: false,
                data:action.payload.data,
                completed:true,
            }

        case types.GET_MSG+"_REJECTED":
            return {
                ...state,
                error:true,
                completed:false,


            }








        case types.ADD_MSG+"_PENDING":
            return {
                ...state,
                fetching: true,
            }

        case types.ADD_MSG+"_FULFILLED":
            return {
                ...state,
                data:action.payload.data,
                completed:true,
            }

        case types.ADD_MSG+"_REJECTED":
            return {
                ...state,
                error:true
            }






        default:
            return state
    }
};
