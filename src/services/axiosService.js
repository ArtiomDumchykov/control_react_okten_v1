import axios from "axios";

import { baseURL } from "../constans";

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2E2NzFhYmY3NTAzNmYwYjdhOTE2ZTRiNWM4NGVjYSIsInN1YiI6IjYxODYzOTBjMTNhMzg4MDAyYjE2MDlmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z9eCY7nLcOBQW7LawHZJnRukJ9MSXkz7kvRtflBpm-Y'
const authorizationToken = `Bearer ${accessToken}`
const instanceAxios = axios.create({baseURL});

instanceAxios.interceptors.request.use(config => {
    config.headers = config.headers || {};
    config.headers.Authorization = authorizationToken
    return config
})

export {
    instanceAxios
}