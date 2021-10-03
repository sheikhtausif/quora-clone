import {
    ADD_TODOS_SUCCESS, ADD_TODOS_FAILURE, ADD_TODOS_REQUEST,
    GET_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST,
    DELETE_TODOS_SUCCESS, DELETE_TODOS_FAILURE, DELETE_TODOS_REQUEST,
    TOGGLE_TODOS_SUCCESS, TOGGLE_TODOS_FAILURE, TOGGLE_TODOS_REQUEST,
    EDIT_TODOS_SUCCESS, EDIT_TODOS_FAILURE, EDIT_TODOS_REQUEST,
    GET_DATA_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUEST,
    GET_USER_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST,

} from './actionType'

const initialState = {
    todo: [],
    isLoading: false,
    isError: false,
    gitHubUsers: [],
    user: "",
}

export const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_TODOS_REQUEST:
            return {
                ...state, isLoading: true, isError: false,
            }
        case ADD_TODOS_SUCCESS:
            return {
                ...state, isLoading: false, isError: false, todo: [...state.todo, payload]
            }
        case ADD_TODOS_FAILURE:
            return {
                ...state, isError: true, isLoading: false,
            }
        case GET_TODOS_REQUEST:
            return {
                ...state, isLoading: true, isError: false
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state, isLoading: false, isError: false, todo: payload
            }
        case GET_TODOS_FAILURE:
            return {
                ...state, isError: true, isLoading: false, payload
            }
        case DELETE_TODOS_REQUEST:
            return {
                ...state, isLoading: true, isError: false
            }
        case DELETE_TODOS_SUCCESS:
            return {
                ...state, isLoading: false, isError: false,
            }
        case DELETE_TODOS_FAILURE:
            return {
                ...state, isError: true, isLoading: false, payload
            }
        case TOGGLE_TODOS_REQUEST:
            return {
                ...state, isLoading: true, isError: false
            }
        case TOGGLE_TODOS_SUCCESS:
            return {
                ...state, isLoading: false, isError: false,
            }
        case TOGGLE_TODOS_FAILURE:
            return {
                ...state, isError: true, isLoading: false, payload
            }
        case EDIT_TODOS_REQUEST:
            return {
                ...state, isLoading: true, isError: false
            }
        case EDIT_TODOS_SUCCESS:
            return {
                ...state, isLoading: false, isError: false,
            }
        case EDIT_TODOS_FAILURE:
            return {
                ...state, isError: true, isLoading: false, payload
            }

        // ! GitHub user search actionType
        case GET_DATA_REQUEST:
            return {
                ...state, isLoading: true, isError: false
            }
        case GET_DATA_SUCCESS:
            return {
                ...state, isLoading: false, isError: false, gitHubUsers: payload,
            }
        case GET_DATA_FAILURE:
            return {
                ...state, isError: true, isLoading: false, payload
            }
        case GET_USER_REQUEST:
            return {
                ...state, isLoading: true, isError: false
            }
        case GET_USER_SUCCESS:
            return {
                ...state, isLoading: false, isError: false,
            }
        case GET_USER_FAILURE:
            return {
                ...state, isError: true, isLoading: false, payload
            }

        default: return state
    }
}