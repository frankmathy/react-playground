import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://eventmanager-218b6.firebaseio.com/'
});

export default instance;
