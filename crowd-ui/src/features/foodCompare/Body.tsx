import './style.scss';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import Header from './common/Header';
import Footer from './common/Footer';
import { getUsersFetch, postData } from './actions';
import { selectLoading, selectQuestion } from './foodCompareSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import '../../App.scss';

enum foodCompareType {
  bottom = 3,
  similar = 2,
  top = 1,
  next = 0
}

function FoodCompareBody() {
  const dispatch = useAppDispatch();

  const question = useAppSelector(selectQuestion);
  let isLoading = useAppSelector(selectLoading);

  // console.log('Body Loading:', isLoading);

  useEffect(() => {
    isLoading = false;
    if (!isLoading) {
      dispatch(getUsersFetch());
    }
  }, [isLoading]);

  // console.log('isLoading', isLoading);
  // console.log('input array', question);

  const getSendData = (foodCompare:foodCompareType) => ({
    questionId: question.id,
    foodCompare,
  });

  return (
    <>
      {isLoading && (
      <p>
        {' '}
        <FormattedMessage id="general.loading" />
        {' '}
      </p>
      )}
      {!isLoading
          && (
          <div className="container">
            <Header />
            <p><FormattedMessage id="foodCompare.question" /></p>
            <span>
              <b>{question.question1.title}</b>
              {' '}
              (
              <FormattedMessage id="shared.top" />
              ) or
            </span>
            <span>
              <b>{question.question2.title}</b>
              {' '}
              (
              <FormattedMessage id="shared.bottom" />
              )  ?
            </span>
            <div className="img_scroll">
              <div className="img_container">
                <img src={question.question1.url} alt="Top" />
                <br />
                <span>Photo @ 1</span>

                <img src={question.question2.url} alt="Bottom" />
                <br />
                <span>Photo @ 2</span>
              </div>

            </div>

            <div>
              <button
                type="button"
                className="btn"
                id="Top_btn"
                onClick={() => {
                  dispatch(postData(getSendData(foodCompareType.top)));
                }}
              >
                <FormattedMessage id="shared.top" />
              </button>

              <button
                type="button"
                className="btn"
                id="Similar_btn"
                onClick={() => {
                  dispatch(postData(getSendData(foodCompareType.similar)));
                }}
              >
                <FormattedMessage id="shared.similar" />
              </button>

              <button
                type="button"
                className="btn"
                id="Bottom_btn"
                onClick={() => {
                  dispatch(postData(getSendData(foodCompareType.bottom)));
                }}
              >
                <FormattedMessage id="shared.bottom" />
              </button>
            </div>
            <Footer />

          </div>
          )}
    </>

  );
}

export default FoodCompareBody;
