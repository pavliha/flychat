import types from "../../actions/types"
import initialState from "../initialState";

const initial = {
    ...initialState,
    data: [],
    ids: []
}
export default (state = initial, action) => {

    switch (action.type) {


        case types.GET_USERS + "_PENDING":
            return {
                ...state,
                fetching: true,
                completed: false,
            }

        case types.GET_USERS + "_FULFILLED":
            return {
                ...state,
                fetching: false,
                data: action.payload.data,
                completed: true,
            }

        case types.GET_USERS + "_REJECTED":
            return {
                ...state,
                error: true,
                completed: false,


            }

        default:
            return state
    }
};
