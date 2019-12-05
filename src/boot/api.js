import axios from 'axios'
export const BASE_URL = 'http://larapress.ntzyr.xyz/'
export const API_URL = BASE_URL + 'api/'

const API = axios.create({
  baseURL: API_URL
})

export default API
