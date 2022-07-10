import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://floating-brushlands-63940.herokuapp.com/'
})

export default instance;