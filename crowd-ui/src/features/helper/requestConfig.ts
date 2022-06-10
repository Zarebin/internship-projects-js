import axios from 'axios';

export const dataRequest = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const request = axios.create({
  baseURL: 'https://react-http-8ae62-default-rtdb.firebaseio.com',
});

export default request;
