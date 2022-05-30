import axios from 'axios';

export const fetch = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
    return res;
}
