



import { questions } from './Questions-Data'




export const fetchQuestion = (category) => async dispatch => {
    const result = await questions.data.filter(cat => cat.title === category.title)
    return result;
}

//.filter(question => {question.title === state.selectedCategory.title});
