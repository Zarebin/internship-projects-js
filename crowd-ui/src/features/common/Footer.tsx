import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { postData } from '../sentiment/actions';
import { selectQuestion } from '../sentiment/sentimentSlice';
import './Footer.scss';

enum FooterType {
  skip = 0,
  previous = -1,
}

function Footer() {
  const dispatch = useAppDispatch();
  const question = useAppSelector(selectQuestion);

  const getSendData = (sentiment: any) => ({
    questionId: question.id,
    sentiment,
  });

  return (
    <div className="footer">
      <button
        type="button"
        onClick={() => {
          dispatch(postData(getSendData(FooterType.previous)));
        }}
      >
        <span>Previous</span>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="gray" d="m14 20l-8-8l8-8l1.414 1.414L8.828 12l6.586 6.586z" /></svg>
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(postData(getSendData(FooterType.skip)));
        }}
      >
        <span>Skip</span>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="gray" d="m10 20l8-8l-8-8l-1.414 1.414L15.172 12l-6.586 6.586z" /></svg>
      </button>
    </div>
  );
}

export default Footer;
