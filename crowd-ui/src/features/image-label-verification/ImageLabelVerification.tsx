import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import {
  selectCategory,
  getPhoto,
  selectPhoto,
  selectUserAnswers,
  setUserAnswer,
} from "./imageLabelVerificationSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getAsyncPhotoWithSaga } from "./Actions";

import { questions } from "./Questions-Data";

let userName = "Masoud";

const ImageLabelQuestions = () => {
  const allCatergoriesQuestions = questions;
  //console.log(allCatergoriesQuestions.data);
  const dispatch = useAppDispatch();

  const currentPhoto = useAppSelector(selectPhoto);
  const currentCategory = useAppSelector(selectCategory);
  const currentPhotoAnswer = useAppSelector(selectUserAnswers);

  useEffect(() => {
    //console.log("questions useEffect");
    dispatch(
      getPhoto(
        allCatergoriesQuestions.data.filter(
          (question) => question.title === currentCategory.title
        )[0]
      )
    );
  }, []);

  console.log("this is current photo", currentPhoto);

  return (
    <div className="main-container">
      <div className="inner-container">
        <div className="flex-row-justify-between">
          <Link
            to="/imageLabelVerification"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>

          <a className="margin-icon">
            <FontAwesomeIcon icon={faEllipsisV} />
          </a>
        </div>
        <div className="question-container">
          <p>{`Does this image contain ${currentCategory?.title}?`}</p>
        </div>
        <div className="image-container">
          <img className="img-display" src={currentPhoto?.qImageUrl}></img>
        </div>

        <div className="image-copy-right">
          <p>All rights Reserved c 2022</p>
        </div>
        <div className="yes-no-container">
          <button
            className="btn-1"
            onClick={() => {
              dispatch(getAsyncPhotoWithSaga());
              // we submit the answer here
              dispatch(
                setUserAnswer({
                  id: currentPhoto.id,
                  qImageUrl: currentPhoto.qImageUrl,
                  userAnswer: "No",
                  userName: userName,
                })
              );
              console.log(`currentPhotoAnswer :`, currentPhotoAnswer);
            }}
          >
            No
          </button>
          <button
            className="btn-1"
            onClick={() => {
              let currentAnswerId = currentPhoto.id;
              let currentAnswerUrl = currentPhoto.qImageUrl;
              dispatch(getAsyncPhotoWithSaga());
              // we submit the answer here
              // line bellow does not work correctly to set user answer.
              FIXME: dispatch(
                setUserAnswer({
                  id: currentAnswerId,
                  qImageUrl: currentAnswerUrl,
                  userAnswer: "Yes",
                  userName: userName,
                })
              );
              console.log(`currentPhotoAnswer :`, currentPhotoAnswer);
            }}
          >
            Yes
          </button>
        </div>
        <div className="line"></div>
        <div className="flex-row-justify-between padding-top">
          <a className="cursor-pointer" onClick={() => {}}>
            {" "}
            <FontAwesomeIcon icon={faAngleLeft} /> Previous
          </a>

          <a
            className="margin-icon cursor-pointer"
            onClick={() => {
              dispatch(getAsyncPhotoWithSaga());
            }}
          >
            Skip <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageLabelQuestions;
