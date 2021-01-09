// configura axios
import axios from 'axios';
const api= axios.create({baseURL:'https://sandbox.api.pagseguro.com'});
export default api;