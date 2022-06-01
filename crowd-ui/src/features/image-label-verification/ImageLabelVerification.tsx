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
  selectLoading,
  selectPhoto,
  setCategorytitle,
} from "./imageLabelVerificationSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getAsyncPhotoWithSaga, postData } from "./Actions";

import Header from "../../features/image-label-verification/components/Header/Header";

let userName = "Masoud";

const ImageLabelQuestions = () => {
  const dispatch = useAppDispatch();

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const categoryTitle = params.get("query");
  dispatch(setCategorytitle(categoryTitle));
  const isLoading = useAppSelector(selectLoading);
  const currentPhoto = useAppSelector(selectPhoto);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getAsyncPhotoWithSaga());
    }
  }, [isLoading]);

  console.log("isLoading", isLoading);
  console.log("current photo", currentPhoto);
  // @ts-ignore
  const CreateAnswer: any = (answer: any) => {
    console.log("userAnswer :", answer);
    return {
      questionId: currentPhoto.id,
      answer: answer,
    };
  };

  return (
    <>
      {isLoading && (
        <div className="main-container">
          <div className="inner-container">
            <div className="header flex-row-justify-between">
              <p> Photo is Loading </p>
            </div>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="main-container">
          <div className="inner-container">
            <Header />

            <div className="question-container">
              <p>{`Does this image contain ${categoryTitle}?`}</p>
            </div>

            <div className="image-container">
              <img className="img-display" src={currentPhoto.qImageUrl}></img>
            </div>

            <div className="image-copy-right">
              <p>All rights Reserved c 2022</p>
            </div>
            <div className="yes-no-container">
              <button
                className="btn-1"
                onClick={() => {
                  //@ts-ignore
                  dispatch(postData(CreateAnswer(1)));
                }}
              >
                No
              </button>
              <button
                className="btn-1"
                onClick={() => {
                  //@ts-ignore
                  dispatch(postData(CreateAnswer(2)));
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
      )}
    </>
  );
};

export default ImageLabelQuestions;
