import './style.scss';
import { useEffect } from 'react';
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

  console.log('Body Loading:', isLoading);

  useEffect(() => {
    isLoading = false;
    if (!isLoading) {
      dispatch(getUsersFetch());
    }
  }, [isLoading]);

  console.log('isLoading', isLoading);
  console.log('input array', question);

  const getSendData = (foodCompare:foodCompareType) => ({
    questionId: question.id,
    foodCompare,
  });

  return (
    <>
      {isLoading && <p> please wait </p>}
      {!isLoading
          && (
          <div className="container">
            <Header />
            <p>Which dish is more filling:</p>
            <span>
              <b>{question.question1.title}</b>
              {' '}
              (top) or
            </span>
            <span>
              <b>{question.question2.title}</b>
              {' '}
              (bottom)  ?
            </span>
            <div className="img_scroll">

              <img src={question.question1.url} alt="Top" />
              <br />
              <span>Photo @ 1</span>

              <img src={question.question2.url} alt="Bottom" />
              <br />
              <span>Photo @ 2</span>
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
                Top
              </button>

              <button
                type="button"
                className="btn"
                id="Similar_btn"
                onClick={() => {
                  dispatch(postData(getSendData(foodCompareType.similar)));
                }}
              >
                Similar
              </button>

              <button
                type="button"
                className="btn"
                id="Bottom_btn"
                onClick={() => {
                  dispatch(postData(getSendData(foodCompareType.bottom)));
                }}
              >
                Bottom
              </button>
            </div>
            <Footer />

          </div>
          )}
    </>

  );
}

export default FoodCompareBody;
