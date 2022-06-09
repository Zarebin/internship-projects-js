import questions from './Questions-Data';
import request from '../../helper/requestConfig';

export const fetchQuestion: any = (categoryTitle: any) => async () => {
  const outquestions = await questions.data.filter((question) => question.title === categoryTitle);
  const onequestion = outquestions[Math.floor(Math.random() * outquestions.length)];

  return onequestion;
};

export const PostUserData = async (data: any, userId: any) => {
  const result = await request.post('/user.json', { ...data, userId });
  return result;
};
