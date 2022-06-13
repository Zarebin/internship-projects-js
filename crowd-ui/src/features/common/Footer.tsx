import React from 'react';
import './Footer.scss';
import { FormattedMessage } from 'react-intl';
import { postData } from '../foodFacts/actions';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectData } from '../foodFacts/FoodFactsSlice';

enum FoodFactsType{
  Skip=0,
  Previous=-1,
}

function Footer() {
  const dispatch = useAppDispatch();
  const question = useAppSelector(selectData);

  const getSendData = (answer:FoodFactsType) => ({
    questionId: question.id,
    answer,
  });

  return (
    <div className="Footer">
      <button className="Footer__button" type="button" onClick={() => { dispatch(postData(getSendData(FoodFactsType.Skip))); }}>
        <span><FormattedMessage id="app.footer.skip" defaultMessage="English" /></span>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="gray" d="m10 20l8-8l-8-8l-1.414 1.414L15.172 12l-6.586 6.586z" /></svg>
      </button>
    </div>
  );
}

export default Footer;
