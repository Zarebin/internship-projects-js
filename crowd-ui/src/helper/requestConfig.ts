import axios from "axios";

const request = axios.create({
  baseURL: "https://react-http-8ae62-default-rtdb.firebaseio.com",
  timeout: 5000,
});

export default request;

