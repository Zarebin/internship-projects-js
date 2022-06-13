import React from 'react';
import { Link } from 'react-router-dom';
import { KeyboardArrowRight } from '@mui/icons-material';
import { FormattedMessage } from 'react-intl';
import { selectPhoto, selectCategoryTitle, selectLoading } from '../../imageLabelVerificationSlice';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import { postData } from '../../Actions';

enum AnswerType {
  yes = 1,
  no = 2,
  skip = 0,
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
    <>
      <div className="line" />
      <Link
        to={`/imageLabelQuestions?query=${categoryTitle}`}
        className={!isLoading ? 'footer cursor-pointer' : 'footer disabled-item'}
        onClick={() => {
          dispatch(postData(CreateAnswer(AnswerType.skip)));
        }}
      >
        <div className="flex-row-justify-start">
          <div>
            <KeyboardArrowRight />
          </div>
          <div>
            <FormattedMessage id="shared.ignore" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Footer;
