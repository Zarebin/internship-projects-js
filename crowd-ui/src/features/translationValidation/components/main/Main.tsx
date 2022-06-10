import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSentenceFetch, postUserData } from '../../action';
import './main.scss';
import { selectSentences, selectLoading } from '../../slice';
// eslint-disable-next-line import/order
import Button from 'react-bootstrap/Button';

export default function Main() {
  const [inputUser, setInputUsers] = useState<any>('');
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
    userSentenceSelect: { inputUser },
  });

  return (
    <>
      {isLoading && <p>Please waite</p>}
      {!isLoading
                && (
                <div className="container-main">
                  <div className="text">Are these translation correct?</div>
                  <div className="mainText">
                    {' '}
                    {mainSentence}
                    {' '}
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
                          value="true"
                          // onChange={handleChange}
                          onChange={() => setInputUsers(true)}
                        />
                        <span>&#10003;</span>
                      </div>
                      <div className="checkMark">
                        <input
                          name="choose"
                          type="radio"
                          value="false"
                          // onChange={handleChange}
                          onChange={() => setInputUsers(false)}
                        />
                        <span>&#x2715;</span>
                      </div>
                    </div>
                  </div>
                  <div className="container-main__button">
                    <div className="space" />
                    <Button
                      id="submit_button"
                      onClick={() => dispatch(postUserData(getSendData()))}
                      className="btn-primary"
                    >
                      submit
                    </Button>
                  </div>
                </div>
                )}
    </>
  );
}
