import axios from 'axios';

const request = axios.create({
  baseURL: 'https://react-http-8ae62-default-rtdb.firebaseio.com',
  timeout: process.env.REACT_APP_API_TIMEOUT,
});

export default request;
