import React from 'react';
import './QuestionBox.scss';
import QuestionSentence from './questionSentence/QuestionSentence';
import QuestionImage from './questionImage/QuestionImage';

function QuestionBox(props: any) {
  // console.log("from Question:",props.questionText)

  const myprops = props;
  const questionSentence = myprops.questionText;
  const questionSrc = myprops.questionImage;
  const ImagePhotoGrapherName = myprops.imagePhotoGrapher;
  return (
    <div className="QuestionBox">
      <QuestionSentence QuestionSentence={questionSentence} />
      <QuestionImage
        QuestionSrc={questionSrc}
        imagePhotoGrapherName={ImagePhotoGrapherName}
        className="QuestionImage"
      />
    </div>
  );
}

export default QuestionBox;
