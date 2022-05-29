import "./Image-category-item.styles.scss";
import "../../styles/mainPage.scss";
import "../../styles/secPage.scss";

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
