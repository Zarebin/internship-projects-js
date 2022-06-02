import "./Sentiment.scss";
import { useEffect } from "react";
import { getUsersFetch, postData } from "./actions";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectLoading, selectQuestion } from "./sentimentSlice";
import Header from "../common/Header";
import Footer from "../common/Footer";

enum SentimentType {
  happy = 3,
  poker = 2,
  sad = 1,
}

function Sentiment() {
  const dispatch = useAppDispatch();

  const question = useAppSelector(selectQuestion);
  const isLoading = useAppSelector(selectLoading);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getUsersFetch());
    }
  }, [isLoading]);

  const getSendData = (sentiment: SentimentType) => {
    return {
      questionId: question.id,
      sentiment: sentiment,
    };
  };

  return (
    <>
      {isLoading && <p> please wait </p>}
      {!isLoading && (
        <div className="container">
          <Header />
          <div className="sentiment">
            <div className="content">
              <p className="question">
                what kind of emotion is expressed in the text below?
              </p>
              <p className="answer">{question.title}</p>
            </div>
            <div className="rating">
              <button
                id="sad"
                onClick={() => {
                  dispatch(postData(getSendData(SentimentType.sad)));
                }}
              ></button>
              <button
                id="poker"
                onClick={() => {
                  dispatch(postData(getSendData(SentimentType.poker)));
                }}
              ></button>
              <button
                id="happy"
                onClick={() => {
                  dispatch(postData(getSendData(SentimentType.happy)));
                }}
              ></button>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Sentiment;
