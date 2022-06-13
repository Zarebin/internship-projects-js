import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import CategoryItem from '../category-item/Image-category-item.component'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setCategory, getCategories, selectCategories } from '../../imageLabelVerificationSlice'
import { useEffect } from 'react'


import { categories } from '../../Data'


const Home = () =>{

    const allCategories = categories
    

     const dispatch = useAppDispatch();
      
    const categoriesState = useAppSelector(selectCategories)

    //console.log(allCategories.data)
    
    useEffect(() => {
        dispatch(getCategories(allCategories.data))},[])






    return (
        
        
        <div className='main-container'>
        <div className='inner-container'>
            <div className='flex-row-justify-start'>
                  <div><FontAwesomeIcon icon={faArrowLeft} /></div>
                  <h3 className='text-1'>Image Label Verification0</h3>
            </div>
                <h3>Choose image category</h3>
            <div className='categories-container'>
            {categoriesState.map((category) => (
                <Link key={category.id} onClick={ () => {
                    console.log(`selected category :`,{category})
                    dispatch(setCategory(category))}} to="/questions">
                    <CategoryItem key={category.id} category={category}/>
                </Link>
              ))}
            </div>
        </div>
    </div>
        

    )
}

export default Home