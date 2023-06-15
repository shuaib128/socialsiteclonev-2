import { GET_LOADING, GET_AUTHOR } from "./AuthorTypes";

const initialState = {
    Loading: false,
    Author: {}
}

const authorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOADING: return {
            ...state,
            Loading: !initialState.Loading
        }
        case GET_AUTHOR: return {
            ...state,
            Author: action.payload
        }
        default: return state
    }
}

export default authorReducer