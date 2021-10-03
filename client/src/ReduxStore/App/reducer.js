import {
    ADD_QUES_SUCCESS,
    ADD_QUES_FAILURE,
    GET_QUES_SUCCESS,
    GET_QUES_FAILURE,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    GET_POST_SUCCESS,
    GET_POST_FAILURE,

} from './actionType'

const initialState = {
    questions: [],
    posts: [],
    isError: false,
    user: "",
}

export const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_QUES_SUCCESS:
            return {
                ...state, isError: false, questions: [...state.questions, payload]
            }
        case ADD_QUES_FAILURE:
            return {
                ...state, isError: true,
            }
        case GET_QUES_SUCCESS:
            return {
                ...state, isError: false, questions: payload
            }
        case GET_QUES_FAILURE:
            return {
                ...state, isError: true,
            }
        case ADD_POST_SUCCESS:
            return {
                ...state, isError: false, posts: [...state.posts, payload]
            }
        case ADD_POST_FAILURE:
            return {
                ...state, isError: true,
            }
        case GET_POST_SUCCESS:
            return {
                ...state, isError: false, posts: payload
            }
        case GET_POST_FAILURE:
            return {
                ...state, isError: true,
            }

        default: return state
    }
}