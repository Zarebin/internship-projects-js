import axios from 'axios';

export const dataRequest = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const request = axios.create({
  // #FIXME this is a temporary url
  baseURL: 'https://react-http-8ae62-default-rtdb.firebaseio.com',
  timeout: 5000,
});

export default request;
