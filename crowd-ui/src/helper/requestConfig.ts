import axios from 'axios';

export const dataRequest = axios.create({
  baseURL: process.env.REACT_APP_ENTRY_URL,
});

export const request = axios.create({
  baseURL: process.env.REACT_APP_POST_URL,
  // timeout: process.env.REACT_APP_API_TIMEOUT as any,
});
