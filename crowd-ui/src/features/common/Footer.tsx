import React from 'react';
import { KeyboardArrowRight } from '@mui/icons-material';
import { FormattedMessage } from 'react-intl';
import { postData } from '../foodFacts/actions';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectData } from '../foodFacts/FoodFactsSlice';
import './Footer.scss';

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
        <KeyboardArrowRight />
      </button>
    </div>
  );
}

export default Footer;
