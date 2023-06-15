import { GET_LOADING, GET_AUTHOR } from "./AuthorTypes";

export const getLoading = (data) => {
    return {
        type: GET_LOADING
    }
}

export const getAuthor = (data) => {
    return {
        type: GET_AUTHOR,
        payload: data
    }
}