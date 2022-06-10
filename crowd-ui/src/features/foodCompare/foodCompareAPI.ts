import axios from 'axios';
import request from '../../helper/requestConfig';

export const fetchfoodCompare = async () => {
  const resp = await axios.get('https://jsonplaceholder.typicode.com/photos');
  const question1 = resp.data[Math.floor(Math.random() * resp.data.length)];
  const question2 = resp.data[Math.floor(Math.random() * resp.data.length)];
  // console.log("from API", resp);
  const respons = { question1, question2 };
  console.log('from API', question1, question2);

  return respons;
};

export const postUserData = async (data: any, userId: any) => await request.post('/user.json', { ...data, userId });
