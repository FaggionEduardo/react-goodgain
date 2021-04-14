// configura axios
import axios from 'axios';
import { isExpired } from "react-jwt";
if (!isExpired(localStorage.getItem('token'))) {
    localStorage.clear()
}
console.log('aaaaaaaaaa')

const api = axios.create({
    baseURL: 'https://goodgain-api.herokuapp.com/api', headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
})

export default api;