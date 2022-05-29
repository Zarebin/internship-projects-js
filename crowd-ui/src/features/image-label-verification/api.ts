import { questions } from "./Questions-Data";

export const fetchQuestion: any = (category: any) => async () => {
  const result = await questions.data.filter(
    (question) => question.title === category.title
    );
  return result;
};

