import { BACKEND_URL } from "./configs"
import axios from "axios"

export function handleLogin(username, password) {
    const LoginUrl = `${BACKEND_URL}/login/`
}

export function handleSignup(email, password) {
    const url = `${BACKEND_URL}/signup/`
    return axios.post(LoginUrl, {email, password})
}

export function handleEmailSubmission(params) {
    const url = `${BACKEND_URL}/send-email/`
    return axios.post(LoginUrl, {email})
}

export function handleLogout(params) {

}

export function saveInLocalStorage(key, data) {

}

export function getInLocalStorage(key) {
    return
}

export function handleQuery(query) {
    const url = `${BACKEND_URL}/handle-query/`
    return axios.post(url, {query})
}


export function handleResetPassword(params) {
    const url = `${BACKEND_URL}/reset-password/`
}