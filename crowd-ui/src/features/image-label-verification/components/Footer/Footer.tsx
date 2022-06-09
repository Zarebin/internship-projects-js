import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { selectPhoto, selectCategoryTitle, selectLoading } from '../../imageLabelVerificationSlice';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import { postData } from '../../Actions';

enum AnswerType {
  yes = 1,
  no = 2,
  skip = 0,
  previous = -1,
}

const Footer = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectLoading);
  const currentPhoto = useAppSelector(selectPhoto);
  const categoryTitle = useAppSelector(selectCategoryTitle);

  const CreateAnswer: any = (answer: any) => ({
    questionId: currentPhoto.id,
    answer,
  });

  return (
    <div className="flex-row-justify-between">
      <Link
        to={`/imageLabelQuestions?query=${categoryTitle}`}
        className={!isLoading ? 'margin-icon cursor-pointer' : 'margin-icon disabled-item'}
        onClick={() => {
          dispatch(postData(CreateAnswer(AnswerType.skip)));
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
        {' '}
        <span>  Previous</span>
      </Link>

      <Link
        to={`/imageLabelQuestions?query=${categoryTitle}`}
        // className={`${isLoading} : margin-icon cursor-pointer ? margin-icon disabled-item`}
        className={!isLoading ? 'margin-icon cursor-pointer' : 'margin-icon disabled-item'}
        onClick={() => {
          dispatch(postData(CreateAnswer(AnswerType.skip)));
        }}
      >
        <span>Skip   </span>
        <FontAwesomeIcon icon={faAngleRight} />
      </Link>
    </div>
  );
};

export default Footer;
