import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { selectLoading, selectPhoto, setCategorytitle } from './imageLabelVerificationSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAsyncPhotoWithSaga, postData } from './Actions';

import Header from './components/Header/Header';

enum AnswerType {
  yes = 1,
  no = 2,
  skip = 0,
  previous = -1,
}

const ImageLabelQuestions = () => {
  const dispatch = useAppDispatch();
  const { search } = window.location;
  const params = new URLSearchParams(search);
  const categoryTitle = params.get('query');
  const isLoading = useAppSelector(selectLoading);
  const currentPhoto = useAppSelector(selectPhoto);

  useEffect(() => {
    dispatch(setCategorytitle(categoryTitle));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getAsyncPhotoWithSaga());
    }
  }, [isLoading]);

  console.log('isLoading', isLoading);
  console.log('current photo', currentPhoto);
  const CreateAnswer: any = (answer: any) => {
    console.log('userAnswer :', answer);
    return {
      questionId: currentPhoto.id,
      answer,
    };
  };

  return (
    <>
      {isLoading && <p> Photo is Loading </p>}
      {!isLoading && (
        <div className="main-container">
          <div className="inner-container">
            <Header />

            <div className="question-container">
              <p>{`Does this image contain ${categoryTitle}?`}</p>
            </div>

            <div className="image-container">
              <img className="img-display" alt="" src={currentPhoto.qImageUrl} />
            </div>

            <div className="image-copy-right">
              <p>All rights Reserved c 2022</p>
            </div>
            <div className="yes-no-container">
              <button
                type="submit"
                className="btn-1"
                onClick={() => {
                  dispatch(postData(CreateAnswer(AnswerType.no)));
                }}
              >
                No
              </button>
              <button
                type="submit"
                className="btn-1"
                onClick={() => {
                  dispatch(postData(CreateAnswer(AnswerType.yes)));
                }}
              >
                Yes
              </button>
            </div>
            <div className="line" />
            <div className="flex-row-justify-between padding-top">
              <Link to="/" className="cursor-pointer">
                <FontAwesomeIcon icon={faAngleLeft} /> Previous
              </Link>

              <Link
                to="/"
                className="margin-icon cursor-pointer"
                onClick={() => {
                  dispatch(postData(CreateAnswer(AnswerType.skip)));
                }}
              >
                Skip
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageLabelQuestions;
