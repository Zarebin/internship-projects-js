import React from 'react';
import { KeyboardArrowRight } from '@mui/icons-material';
import { FormattedMessage } from 'react-intl';
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
        className="footer__next"
        type="button"
        onClick={() => {
          dispatch(postData(getSendData(FooterType.skip)));
        }}
      >
        <span>
          <KeyboardArrowRight sx={{ color: 'blue' }} />
        </span>
        <span><FormattedMessage id="shared.ignore" /></span>
      </button>
    </div>
  );
}

export default Footer;
