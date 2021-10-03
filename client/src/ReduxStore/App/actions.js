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

import axios from 'axios'


// add questions 
const addQuesSuccess = (payload) => {
    return { type: ADD_QUES_SUCCESS, payload }
}
const addQuesFailure = () => {
    return { type: ADD_QUES_FAILURE, }
}

export const addQuestion = (payload) => async dispatch => {
    try {
        const { data } = await axios.post(`http://localhost:8000/questions`, { question: payload }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
        })
        console.log('data:', data)
        dispatch(addQuesSuccess(data))
    }
    catch (err) {
        dispatch(addQuesFailure(err))
    }
}

// get questions
const getQuesSuccess = (payload) => {
    return { type: GET_QUES_SUCCESS, payload }
}
const getQuesFailure = () => {
    return { type: GET_QUES_FAILURE, }
}

export const getQuestion = () => async dispatch => {

    try {
        const { data } = await axios.get(`http://localhost:8000/questions`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
        })
        console.log('data:', data)
        dispatch(getQuesSuccess(data))
    }
    catch (err) {
        dispatch(getQuesFailure(err))
    }
}

// add posts
const addPostSuccess = (payload) => {
    return { type: ADD_POST_SUCCESS, payload }
}
const addPostFailure = () => {
    return { type: ADD_POST_FAILURE, }
}

export const addPost = (payload) => async dispatch => {
    try {
        const { data } = await axios.post(`http://localhost:8000/posts`, { title: payload.title, body: payload.body, photo: payload.url }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
        })
        dispatch(addPostSuccess(data))
    }
    catch (err) {
        dispatch(addPostFailure(err))
    }
}

// get posts
const getPostSuccess = (payload) => {
    return { type: GET_POST_SUCCESS, payload }
}
const getPostFailure = () => {
    return { type: GET_POST_FAILURE, }
}

export const getPost = () => async dispatch => {

    try {
        const { data } = await axios.get(`http://localhost:8000/posts`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
        })
        dispatch(getPostSuccess(data))
    }
    catch (err) {
        dispatch(getPostFailure(err))
    }
}



