import axios from 'axios'

const base = axios.create({
    baseURL: '/api'
})

export default base