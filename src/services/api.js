// configura axios
import axios from 'axios';
const api= axios.create({baseURL:'http://goodgain.gg:3000'});
export default api;