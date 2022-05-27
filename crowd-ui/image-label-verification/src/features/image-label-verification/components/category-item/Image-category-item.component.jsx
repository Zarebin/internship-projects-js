import './Image-category-item.styles.scss'

const CategoryItem = ({ category }) =>{
    
    const { imageUrl, title } = category;
    return(
        <div className='category' style={{
            backgroundImage: `url(${imageUrl})`,
          }}>
              <p className='category-title'>{title}</p>
          </div>
    )

}

export default CategoryItem