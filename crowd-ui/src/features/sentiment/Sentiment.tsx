import './Sentiment.scss';
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
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
      {isLoading && (
      <p>
        <FormattedMessage id="general.loading" />
      </p>
      )}
      {!isLoading && (
        <div className="App">
          <Header />
          <div className="body">
            <div className="body__question">
              <p className="body__text">
                <FormattedMessage id="sentiment.question" />
              </p>
              <p className="body__answer">{question.title}</p>
            </div>
            <div className="body__feeling">
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
