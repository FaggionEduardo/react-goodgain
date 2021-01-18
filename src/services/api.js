// configura axios
import axios from 'axios';
const api= axios.create({baseURL:'https://goodgain.gg:3000'});
export default api;