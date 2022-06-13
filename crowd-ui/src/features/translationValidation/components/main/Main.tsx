import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { getSentenceFetch, postUserData } from '../../action';
import './main.scss';
import { selectSentences, selectLoading } from '../../slice';

export default function Main() {
  enum answerType {
    Yes = 1,
    No = 2,
    NonSelect = 3,
  }
  const [userAnswer, setUserAnswer] = useState<number>(answerType.NonSelect);
  const sentence: any = useSelector<any, any>(selectSentences);
  const isLoading: any = useSelector<any, any>(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(getSentenceFetch());
    }
  }, [isLoading]);

  let mainSentence = '';
  let translateSentence = '';
  let sentencesId: any = null;
  if ('elementItem' in sentence) {
    mainSentence = 'name' in sentence.elementItem ? sentence.elementItem.name : '';
    translateSentence = 'email' in sentence.elementItem ? sentence.elementItem.email : '';
    sentencesId = 'id' in sentence.elementItem ? sentence.elementItem.id : null;
  }

  const getSendData = () => ({
    sentencesId,
    userSentenceSelect: { userAnswer },
  });

  return (
    <>
      {isLoading && <p><FormattedMessage id="translation.general.loading" /></p>}
      {!isLoading
                && (
                <div className="container-main">
                  <h3 className="text"><FormattedMessage id="translation.title" /></h3>
                  <div className="mainText">
                    {mainSentence}
                  </div>
                  <div className="translationBox">
                    <div className="text__transition">
                      {translateSentence}
                      {' '}
                    </div>
                    <div className="selfSelection">

                      <div className="checkMark">
                        <input
                          name="choose"
                          type="radio"
                          onChange={() => setUserAnswer(answerType.Yes)}
                        />
                        <span>&#10003;</span>
                      </div>
                      <div className="checkMark">
                        <input
                          name="choose"
                          type="radio"
                          onChange={() => setUserAnswer(answerType.No)}
                        />
                        <span>&#x2715;</span>
                      </div>
                    </div>
                  </div>
                  <div className="container-main__button">
                    <div className="space" />
                    {/* eslint-disable-next-line react/button-has-type */}
                    <button
                      id="submit_button"
                      onClick={() => {
                        dispatch(postUserData(getSendData()));
                      }}
                    >
                      submit
                    </button>
                  </div>
                </div>
                )}
    </>
  );
}
