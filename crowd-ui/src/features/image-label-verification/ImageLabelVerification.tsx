import React, { useEffect } from 'react';
import { selectLoading, selectPhoto, setCategorytitle } from './imageLabelVerificationSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAsyncPhotoWithSaga, postData } from './Actions';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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

  // console.log('isLoading', isLoading);
  // console.log('current photo', currentPhoto);
  const CreateAnswer: any = (answer: any) => (
    {
      questionId: currentPhoto.id,
      answer,
    }
  );

  return (
    <>
      {isLoading && (
        <div className="main-container">
          <div className="inner-container">
            <Header />
            <div className="content-container">
              <div className="question-container">
                <p>{`Does this image contain ${categoryTitle}?`}</p>
              </div>

              <div className="image-container">
                <p> Image is Loading ...</p>
              </div>

              <div className="image-copy-right">
                <p>All rights Reserved c 2022</p>
              </div>
            </div>
            <div className="yes-no-container">
              <button
                type="submit"
                className="disabled-btn"
              >
                No
              </button>
              <button
                type="submit"
                className="disabled-btn"
              >
                Yes
              </button>
            </div>
          </div>
          <div className="line" />
          <Footer />
        </div>
      )}
      {!isLoading && (
        <div className="main-container">
          <div className="inner-container">
            <Header />
            <div className="content-container">
              <div className="question-container">
                <p>{`Does this image contain ${categoryTitle}?`}</p>
              </div>

              <div className="image-container">
                <img className="img-display" alt="" src={currentPhoto.qImageUrl} />
              </div>

              <div className="image-copy-right">
                <p>All rights Reserved c 2022</p>
              </div>
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
          </div>
          <div className="line" />
          <Footer />
        </div>
      )}
    </>
  );
};

export default ImageLabelQuestions;
