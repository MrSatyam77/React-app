import axios from 'axios';
const instance = axios.create({
    baseURL:'https://react-my-burger-d767f-default-rtdb.firebaseio.com/'
});
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.post['Content-Type'] = 'application/json';
export default instance;