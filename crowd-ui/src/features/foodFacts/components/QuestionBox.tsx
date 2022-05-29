import './QuestionBox.scss';
import QuestionSentence from "./questionSentence/QuestionSentence"
import QuestionImage from "./questionImage/QuestionImage";
function QuestionBox(props:any) {
  // console.log("from Question:",props.questionText)
  return (
    <div className="QuestionBox">
      <QuestionSentence QuestionSentence={props.questionText}/>
      <QuestionImage QuestionSrc={props.questionImage} imagePhotoGrapherName={props.imagePhotoGrapher} className="QuestionImage"/>
    </div>
  );
}

export default QuestionBox;
