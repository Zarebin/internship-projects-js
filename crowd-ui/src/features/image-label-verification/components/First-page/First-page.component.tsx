import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import CategoryItem from '../category-item/Image-category-item.component';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { setCategory, getCategories, selectCategories } from '../../imageLabelVerificationSlice';
import categories from '../../Data';
import Header from '../Header/Header';

const ImageLabelHome = () => {
  const allCategories = categories;

  const dispatch = useAppDispatch();

  const categoriesState = useAppSelector(selectCategories);

  useEffect(() => {
    dispatch(getCategories(allCategories.data));
  }, []);

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="inner-container-first">
          <h3><FormattedMessage id="imageLabel.ChooseCategory" /></h3>
          <div className="categories-container">
            {categoriesState.map((category: any) => (
              <Link
                key={category.id}
                onClick={() => {
                  // console.log('selected category :', { category });
                  dispatch(setCategory(category));
                }}
                to={`/imageLabelQuestions?query=${category.title}`}
              >
                <CategoryItem key={category.id} category={category} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageLabelHome;
