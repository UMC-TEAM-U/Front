import axios from 'axios'

const BASE_URL = 'http://13.124.153.160:8080'

// [get, post] 등 인증 값 필요없는 경우 -> defaultInstance
export const defaultInstance = axios.create({ baseURL: BASE_URL })

// [post, put, delete] 등 인증 값 필요한 경우 -> authInstance
const token = localStorage.getItem('accessToken')
export const authInstance = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: 'Bearer ' + token },
})
