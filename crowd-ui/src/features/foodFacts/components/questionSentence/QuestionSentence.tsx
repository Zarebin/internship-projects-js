import React from 'react';
import './QuestionSentence.scss';

function QuestionSentence(props:any) {
  const myprops = props;
  const question = myprops.QuestionSentence;
  return (
    <div className="QuestionSentence">
      <p>{question}</p>
    </div>
  );
}

export default QuestionSentence;
