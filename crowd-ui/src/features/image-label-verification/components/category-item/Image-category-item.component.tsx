import React from 'react';
import './Image-category-item.styles.scss';
import '../../assets/styles/mainPage.scss';
import '../../assets/styles/secPage.scss';

const CategoryItem = ({ category }: any) => {
  const { imageUrl, title } = category;
  return (
    <div
      className="category"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <p className="category-title">{title}</p>
    </div>
  );
};

export default CategoryItem;
