import {
    SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS,
    LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS,
} from './actionType'
import { Redirect } from 'react-router-dom'

const signupRequest = () => {
    return { type: SIGNUP_REQUEST, }
}
const signupSuccess = () => {
    return { type: SIGNUP_SUCCESS, }
}
const signupFailure = () => {
    return { type: SIGNUP_FAILURE, }
}

export const signup = (payload) => dispatch => {
    dispatch(signupRequest())
    fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: payload,
    }).then(res => res.json()).then(res => {
        console.log('res:', res)
        dispatch(signupSuccess())
        if (res.error) {
            alert(res.message)
        }
        else {
            return <Redirect to="/login" />
        }

    }).catch(err => {
        dispatch(signupFailure())
        alert(err.message)
        console.log('err:', err)
    })
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

export const login = (payload) => dispatch => {
    dispatch(loginRequest())
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload
    }).then(res => res.json()).then(res => {
        console.log('res:', res)
        dispatch(loginSuccess(res.token))
    }).catch(err => {
        alert(err.message)
        console.log('err:', err)
        dispatch(loginFailure())

    })
}