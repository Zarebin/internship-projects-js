import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { selectLoading, selectPhoto, setCategorytitle } from './imageLabelVerificationSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAsyncPhotoWithSaga, postData } from './Actions';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

enum AnswerType {
  yes = 1,
  no = 2,
  skip = 0,
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
        <div className="app-container">
          <Header />
          <div className="main-container">
            <div className="inner-container-second">
              <div className="content-container">
                <div className="question-container">
                  <FormattedMessage id="imageLabel.question" />
                  {`${categoryTitle} `}
                  <FormattedMessage id="imageLabel.see" />
                </div>

                <div className="image-container">
                  <FormattedMessage id="imageLabel.imageIsLoading" />
                </div>
              </div>
              <div className="yes-no-container">
                <button
                  type="submit"
                  className="disabled-btn"
                >
                  <FormattedMessage id="Answer.yes" />
                </button>
                <button
                  type="submit"
                  className="disabled-btn"
                >
                  <FormattedMessage id="Answer.no" />
                </button>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="app-container">
          <Header />
          <div className="main-container">
            <div className="inner-container-second">
              {/* <Header /> */}
              <div className="content-container">
                <div className="question-container">
                  <FormattedMessage id="imageLabel.question" />
                  {`${categoryTitle} `}
                  <FormattedMessage id="imageLabel.see" />
                </div>

                <div className="image-container">
                  <img className="img-display" alt="" src={currentPhoto.qImageUrl} />
                </div>

              </div>
              <div className="yes-no-container">
                <button
                  type="submit"
                  className="btn-1"
                  onClick={() => {
                    dispatch(postData(CreateAnswer(AnswerType.yes)));
                  }}
                >
                  <FormattedMessage id="Answer.yes" />
                </button>
                <button
                  type="submit"
                  className="btn-1"
                  onClick={() => {
                    dispatch(postData(CreateAnswer(AnswerType.no)));
                  }}
                >
                  <FormattedMessage id="Answer.no" />
                </button>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageLabelQuestions;
