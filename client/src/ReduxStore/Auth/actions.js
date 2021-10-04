import {
    SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS,
    LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS,
} from './actionType'
import axios from 'axios'
import swal from 'sweetalert';

const signupRequest = () => {
    return { type: SIGNUP_REQUEST, }
}
const signupSuccess = () => {
    return { type: SIGNUP_SUCCESS, }
}
const signupFailure = () => {
    return { type: SIGNUP_FAILURE, }
}

export const signup = (payload) => async dispatch => {
    console.log('payload:', payload)
    try {
        dispatch(signupRequest())
        const { data } = await axios.post('http://localhost:8000/register', payload)
        dispatch(signupSuccess(data.token))
        swal({
            title: "Account created successfully!",
            icon: "success",
            button: "Ok",
        });
    }
    catch (err) {
        swal({
            title: "Email already exists!",
            icon: "error",
            button: "Ok",
        });
        dispatch(signupFailure())
    }
}


const loginRequest = () => {
    return { type: LOGIN_REQUEST, }
}
const loginSuccess = (payload) => {
    return { type: LOGIN_SUCCESS, payload }
}
const loginFailure = () => {
    return { type: LOGIN_FAILURE, }
}

export const login = (payload) => async dispatch => {
    dispatch(loginRequest())
    try {
        const { data } = await axios.post('http://localhost:8000/login', payload)
        dispatch(loginSuccess(data))
    }
    catch (err) {
        swal({
            title: "Invalid credentials!",
            icon: "error",
            button: "Ok",
        });
        dispatch(loginFailure())
    }
}