import axios from "axios";


const request = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
});

export default request;
