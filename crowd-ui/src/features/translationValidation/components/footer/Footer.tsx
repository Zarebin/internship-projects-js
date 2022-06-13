import React from 'react';
import './footer.scss';
import { KeyboardArrowRight } from '@mui/icons-material';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectSentences } from '../../slice';
import { postUserData } from '../../action';

export default function Footer() {
  enum FooterType {
  skip = 3,
  }
  const sentence: any = useSelector<any, any>(selectSentences);
  const isLoading: any = useSelector<any, any>(selectLoading);
  const dispatch = useDispatch();

  let sentencesId: any = null;
  if ('elementItem' in sentence) {
    sentencesId = 'id' in sentence.elementItem ? sentence.elementItem.id : null;
  }
  const getSendData = () => ({
    sentencesId,
    userSentenceSelect: FooterType.skip,
  });

  return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!isLoading && (
        <div className="footer">
          <button
            className="footer__next"
            type="button"
            onClick={() => {
              dispatch(postUserData(getSendData()));
            }}
          >
            <span><FormattedMessage id="shared.ignore" /></span>
            <span><KeyboardArrowRight /></span>
          </button>

        </div>
      )}
    </>
  );
}
