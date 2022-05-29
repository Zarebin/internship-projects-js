import "./Sentiment.scss";
import { getUsersFetch } from "./actions";
import { sentimentHandler } from "./sentimentSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useEffect } from "react";

enum SentimentType {
  happy = 3,
  poker = 2,
  sad = 1,
}

function Sentiment() {
  useEffect(() => {
    dispatch(getUsersFetch());
  }, []);

  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.sentimentReducer.step);
  const inputData: any = useAppSelector(
    (state) => state.sentimentReducer.inputs
  );

  return (
    <>
      {inputData.length === 0 && <p> please wait </p>}
      {inputData.length !== 0 && (
        <div className="container">
          <Header />
          <div className="sentiment">
            <div className="content">
              <p className="question">
                what kind of emotion is expressed in the text below?
              </p>
              <p className="answer">{inputData.data[step].title}</p>
            </div>
            <div className="rating">
              <button
                id="sad"
                onClick={() =>
                  dispatch(sentimentHandler(SentimentType.sad as any))
                }
              ></button>
              <button
                id="poker"
                onClick={() =>
                  dispatch(sentimentHandler(SentimentType.poker as any))
                }
              ></button>
              <button
                id="happy"
                onClick={() =>
                  dispatch(sentimentHandler(SentimentType.happy as any))
                }
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
