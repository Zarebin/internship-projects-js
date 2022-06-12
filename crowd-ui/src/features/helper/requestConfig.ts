import axios from 'axios';

export const dataRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const request = axios.create({
  baseURL: process.env.REACT_APP_POST_URL,
});

export default request;
