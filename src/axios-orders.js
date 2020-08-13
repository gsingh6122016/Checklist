import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://5f33e9c1cfaf5a001646b758.mockapi.io/api/v0/'
});

export default instance;