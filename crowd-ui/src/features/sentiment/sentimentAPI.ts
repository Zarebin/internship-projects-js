import request, { dataRequest } from '../../helper/requestConfig';

export const fetchSentimentQuestion = async () => {
  const resp = await dataRequest.get('/albums');
  const randomData = resp.data[Math.floor(Math.random() * resp.data.length)];
  const response = { data: randomData, status: resp.status };
  return response;
};

export const postSentimentData = async (data: any, userId: any) => {
  const result = await request.post('/user.json', { ...data, userId });
  return result;
};
