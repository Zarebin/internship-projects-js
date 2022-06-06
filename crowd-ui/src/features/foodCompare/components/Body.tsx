import './style.scss';
import Header from './Header';
import Footer from "./Footer";
import { getUsersFetch, postData } from "../actions";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useEffect } from "react";
import { selectLoading, selectQuestion } from "../foodCompareSlice";
import "../../../../src/App.scss";





enum foodCompareType {
  bottom = 3,
  similar = 2,
  top = 1,
  next = 0
}

function FoodCompareBody() {
    const dispatch = useAppDispatch();

    const question = useAppSelector(selectQuestion);
    let isLoading = useAppSelector(selectLoading);

    console.log("Body Loading:",isLoading );


    // debugger;
    useEffect(() => {
      isLoading = false;
      //debugger;
      console.log("useEffect 1");
      if (!isLoading) {
      console.log("useEffect 2");

        dispatch( getUsersFetch());
      }
      console.log("useEffect 3");

    }, [isLoading]);
  

    
    console.log("isLoading", isLoading);
    console.log("input array", question);
  
    const getSendData = (foodCompare:foodCompareType) => {
      return {
        questionId: question.id,
        foodCompare: foodCompare,
      };
    };
    
    return (
        <>
        {isLoading && <p> please wait </p>}
        {!isLoading && 
          <div className='container'>
            <Header/>
            <p>Which dish is more filling:</p><span>{question.question1.title} (top) or  </span><span>{question.question2.title}  (bottom)  ?</span>
            <img src={question.question1.url} ></img>
            <br></br><span>Photo @ 1</span>
            <br></br>
                <img src={question.question2.url}></img>
            <br></br><span>Photo @ 2</span>
            

            <div>
                <button className='btn' id='Top_btn'  onClick={() => {
                  dispatch(postData(getSendData(foodCompareType.top)));
                }}>Top</button>

                <button className='btn' id='Similar_btn' onClick={() => {
                  dispatch(postData(getSendData(foodCompareType.similar)));
                }}>Similar</button>

                <button className='btn' id='Bottom_btn' onClick={() => {
                  dispatch(postData(getSendData(foodCompareType.bottom)));
                }}>Bottom</button>
            </div>


            <hr></hr>
           <Footer />
            
        </div>}
        </>
        
    );
    
}

export default FoodCompareBody;