import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: process.env.REACT_APP_API_TIMEOUT as any,
});

export default request;
