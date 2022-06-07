import './Sentiment.scss';
import React, { useEffect } from 'react';
import { getUsersFetch, postData } from './actions';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectLoading, selectQuestion } from './sentimentSlice';
import Header from '../common/Header';
import Footer from '../common/Footer';

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
    // isLoading = false;
    if (isLoading) {
      dispatch(getUsersFetch());
    }
  }, [isLoading]);

  const getSendData = (sentiment: SentimentType) => ({
    questionId: question.id,
    sentiment,
  });

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
                aria-label="sad"
                type="button"
                id="sad"
                onClick={() => {
                  dispatch(postData(getSendData(SentimentType.sad)));
                }}
              />
              <button
                aria-label="poker"
                type="button"
                id="poker"
                onClick={() => {
                  dispatch(postData(getSendData(SentimentType.poker)));
                }}
              />
              <button
                aria-label="happy"
                type="button"
                id="happy"
                onClick={() => {
                  dispatch(postData(getSendData(SentimentType.happy)));
                }}
              />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Sentiment;
