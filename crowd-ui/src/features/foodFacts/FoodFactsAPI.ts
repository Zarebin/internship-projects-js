import request, { dataRequest } from '../helper/requestConfig';

export const getFoodQuestion = async () => {
  const resp = await dataRequest.get('/photos');
  const singleResp = resp.data[Math.floor(Math.random() * resp.data.length)];
  const output = { singleQuestion: singleResp, status: resp.status };
  console.log('API :', output);
  return output;
};
export const PostData = async (data:any, userId:any) => {
  const result = await request.post('/user.json', { ...data, userId });
  return result;
};
