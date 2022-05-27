import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faArrowLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import { selectCategory, selectCategories, getPhoto, selectPhoto } from '../../features/image-label-verification/imageLabelVerificationSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAsyncPhotoWithSaga } from './Actions'


import { questions } from './Questions-Data'



let userOutput = {}
let userName = "Masoud"


const Questions = () => {

      const allCatergoriesQuestions = questions
      const dispatch = useAppDispatch(); 

      const currentPhoto = useAppSelector(selectPhoto)
      const currentCategory = useAppSelector(selectCategory)      

      useEffect(() => {
            console.log("questions useEffect")
            dispatch(getPhoto(allCatergoriesQuestions.data.filter(category => category.title === currentCategory.title)[0].questions[0]))},[])

      console.log('this is current photo',currentPhoto)


      //const users = useAppSelector(selectUsers);
      
      
      //const categories = useAppSelector(selectCategories)
      

      //const images = questions.map(question => question.qImageUrl)

      //const [image, setImage] = useState(images[0])
      //console.log(images.indexOf(image), image)
      
    return (
        <div className='main-container'>
          <div className='inner-container'>
          <div className='flex-row-justify-between'>
                  <Link onClick={() => {
                        console.log("userOutput data has been sent to database. Thankyou!");
                        userOutput = {};
                        }
                        }  to="/imageLabelVerification">
                        <FontAwesomeIcon icon={faArrowLeft} />
                  </Link>
                
                <a className='margin-icon'><FontAwesomeIcon icon={faEllipsisV} /></a>
          </div>
          <div className='question-container'>
              <p>{`Does this image contain ${currentCategory?.title}?`}</p>
          </div>
          <div className='image-container'>
             <img className='img-display' src={currentPhoto?.qImageUrl}></img> 
          
          </div>
          
          <div className='image-copy-right'>
            <p>All rights Reserved c 2022</p>
          </div>
          <div className='yes-no-container'>
            <button className="btn-1" onClick={() => {
            // we submit the answer here
            let userOutput = {"id": currentPhoto.id, "qImageUrl": currentPhoto.qImageUrl, "userAnswer": "No", "userName" : userName}
            console.log(`userOutputis :`,userOutput)
            dispatch(getAsyncPhotoWithSaga())
            }}
            >No</button>
            <button className="btn-1" onClick={() => {
            // we submit the answer here
            let userOutput = {"id": currentPhoto.id, "qImageUrl": currentPhoto.qImageUrl, "userAnswer": "Yes", "userName" : userName}
            console.log(`userOutputis :`,userOutput)
            dispatch(getAsyncPhotoWithSaga())
            }}>Yes</button>
          </div>
          <div className="line"></div>
          <div className='flex-row-justify-between padding-top'>
               <a className='cursor-pointer' onClick={() => {
                     //userOutput.splice(userOutput.indexOf(userOutput.find((output) => output.qImageUrl === image)),1);
                     //console.log('userOutput is :',userOutput)
                     //setImage(images[(images.indexOf(image) - 1)])}
               }}> <FontAwesomeIcon icon={faAngleLeft} />     Previous</a> 
                
                <a className='margin-icon cursor-pointer'  onClick={() => {dispatch(getAsyncPhotoWithSaga())}}>Skip   <FontAwesomeIcon icon={faAngleRight} /></a>
          </div>
          </div>
          
          </div>
          
    )
}


export default Questions




