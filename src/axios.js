import axios from 'axios';

const instance = axios.create({
    baseUrl:'...' //the API {cloud function} URL
});

export default instance;