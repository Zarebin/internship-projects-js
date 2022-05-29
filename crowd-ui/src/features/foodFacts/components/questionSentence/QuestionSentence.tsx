import './QuestionSentence.scss';
import {useState} from 'react'
function QuestionSentence(props:any) {
 
  return (
    <div className='QuestionSentence'>
        <p>{props.QuestionSentence}</p>
    </div>
  );
}

export default QuestionSentence;