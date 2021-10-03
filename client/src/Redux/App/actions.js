import {
    ADD_TODOS_SUCCESS, ADD_TODOS_FAILURE, ADD_TODOS_REQUEST,
    GET_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST,
    DELETE_TODOS_SUCCESS, DELETE_TODOS_FAILURE, DELETE_TODOS_REQUEST,
    TOGGLE_TODOS_SUCCESS, TOGGLE_TODOS_FAILURE, TOGGLE_TODOS_REQUEST,
    EDIT_TODOS_SUCCESS, EDIT_TODOS_FAILURE, EDIT_TODOS_REQUEST,
    GET_DATA_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUEST,
    GET_USER_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST,

} from './actionType'

import axios from 'axios'

// Add todos in state
export const addTodosRequest = () => {
    return { type: ADD_TODOS_REQUEST }
}

export const addTodosSuccess = (payload) => {
    return { type: ADD_TODOS_SUCCESS, payload }
}

export const addTodosFailure = () => {
    return { type: ADD_TODOS_FAILURE }
}

export const addTodo = (payload) => async dispatch => {
    dispatch(addTodosRequest())
    try {
        await axios.post(`http://localhost:3002/todo`, payload)
        dispatch(addTodosSuccess(payload))
    }
    catch (error) {
        dispatch(addTodosFailure())
    }
}


// Get todos from state
export const getTodosRequest = () => {
    return { type: GET_TODOS_REQUEST }
}

export const getTodosSuccess = (payload) => {
    return { type: GET_TODOS_SUCCESS, payload }
}

export const getTodosFailure = (payload) => {
    return { type: GET_TODOS_FAILURE, payload }
}

export const getTodo = () => async dispatch => {
    dispatch(getTodosRequest())
    try {
        let { data } = await axios.get(`http://localhost:3002/todo`)
        dispatch(getTodosSuccess(data))
    }
    catch (error) {
        dispatch(getTodosFailure(error))
    }
}


// To delete a todo in the state
export const deleteTodosRequest = () => {
    return { type: DELETE_TODOS_REQUEST }
}

export const deleteTodosSuccess = () => {
    return { type: DELETE_TODOS_SUCCESS, }
}

export const deleteTodosFailure = (payload) => {
    return { type: DELETE_TODOS_FAILURE, payload }
}


export const deleteTodo = (payload) => async dispatch => {
    dispatch(deleteTodosRequest)
    try {
        await axios.delete(`http://localhost:3002/todo/${payload}`)
        dispatch(deleteTodosSuccess())
    }
    catch (error) {
        dispatch(deleteTodosFailure(error))
    }
    axios.get(`http://localhost:3002/todo`).then(response => {
        dispatch(getTodosSuccess(response.data))
    })
}

//To toggle a todo in the state
export const toggleTodosRequest = () => {
    return { type: TOGGLE_TODOS_REQUEST }
}

export const toggleTodosSuccess = () => {
    return { type: TOGGLE_TODOS_SUCCESS, }
}

export const toggleTodosFailure = (payload) => {
    return { type: TOGGLE_TODOS_FAILURE, payload }
}

export const toggleTodo = (payload) => async dispatch => {
    // dispatch(toggleTodosRequest())
    try {
        let { data } = await axios.patch(`http://localhost:3002/todo/${payload.id}`, { ...payload, status: !payload.status })
        console.log('data:', data)
        dispatch(toggleTodosSuccess())
    }
    catch (error) {
        dispatch(toggleTodosFailure(error))
    }
    axios.get(`http://localhost:3002/todo`).then(response => {
        dispatch(getTodosSuccess(response.data))
    })
}


//To edit a todo in the state
export const editTodosRequest = () => {
    return { type: EDIT_TODOS_REQUEST }
}

export const editTodosSuccess = () => {
    return { type: EDIT_TODOS_SUCCESS, }
}

export const editTodosFailure = (payload) => {
    return { type: EDIT_TODOS_FAILURE, payload }
}

export const editTodo = (payload, value) => async dispatch => {
    // dispatch(toggleTodosRequest())
    try {
        let { data } = await axios.patch(`http://localhost:3002/todo/${payload.id}`, { ...payload, title: value.toUpperCase() })
        console.log('data:', data)
        dispatch(editTodosSuccess())
    }
    catch (error) {
        dispatch(editTodosFailure(error))
    }
    axios.get(`http://localhost:3002/todo`).then(response => {
        dispatch(getTodosSuccess(response.data))
    })
}


// ! GitHub user search actionType

export const getDataRequest = () => {
    return { type: GET_DATA_REQUEST }
}

export const getDataSuccess = (payload) => {
    return { type: GET_DATA_SUCCESS, payload }
}

export const getDataFailure = (payload) => {
    return { type: GET_DATA_FAILURE, payload }
}

export const getData = (query, page) => async dispatch => {
    dispatch(getDataRequest())
    try {
        let { data } = await axios.get(`https://api.github.com/search/users?q=${query || "masai"}&page=${page || 1}&per_page=5`)
        console.log('data:', data.items)
        dispatch(getDataSuccess(data.items))
    }
    catch (error) {
        dispatch(getDataFailure(error))
    }
}


export const getUserRequest = () => {
    return { type: GET_USER_REQUEST }
}

export const getUserSuccess = (payload) => {
    return { type: GET_USER_SUCCESS, payload }
}

export const getUserFailure = (payload) => {
    return { type: GET_USER_FAILURE, payload }
}

export const getUser = (payload) => async dispatch => {
    dispatch(getUserRequest())
    try {
        let { data } = await axios.get(`https://api.github.com/search/users?${payload}`)
        console.log('data:', data)
        dispatch(getUserSuccess(data))
    }
    catch (error) {
        dispatch(getUserFailure(error))
    }
}