import axios from 'axios'
export const BASE_URL = 'http://167.172.96.81/'
export const API_URL = BASE_URL + 'api/'

const API = axios.create({
  baseURL: API_URL
})

export default API
