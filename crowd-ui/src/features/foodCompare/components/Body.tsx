import React, {useState} from 'react';
import './style.css';
import Food1 from '../data/Food1.jpg';
import Food2 from '../data/Food2.jpg';
import Header from './Header';


function FoodCompareBody() {
    const [food1,setImage1]=useState(Food1);
    const [food2,setImage2]=useState(Food2);
    return (
        <div className='container'>
            <Header/>
            <div><span>English</span></div>
            <p>Which dish is more filling:</p><span>food1  (top) or  </span><span>food2  (bottom)  ?</span>
            <img src={food1} ></img>
            <br></br><span>Photo @ 1</span>
            <br></br>
                <img src={food2}></img>
            <br></br><span>Photo @ 2</span>
            

            <div>
                <button className='btn'>Top</button>
                <button className='btn'>Similar</button>
                <button className='btn'>Bottom</button>
            </div>


            <hr></hr>
            <div className='foter'>
                <div className='Perivious'>
                    <span >Perivious</span>
                </div>
                <div className='Next'>
                    <span >Next</span>
                </div>
            </div>
           
            
        </div>
        
    );
}

export default FoodCompareBody;