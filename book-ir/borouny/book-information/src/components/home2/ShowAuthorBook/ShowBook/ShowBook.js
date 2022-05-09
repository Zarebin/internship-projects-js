import React,{Component} from 'react';
import './styleShowBook.scss';


const ShowBook = () =>{

    return (
        <div className="container">
            <div className="container__image"><img className="container__image" src="https://shahreketabonline.com/images/ProductImages/9786008099222.jpg"/></div>
            <div className="container__title">
                <div className="title--titer">چراغ ها را من خاموش میکنم</div>
                <div className="title--year">۱۳۶۷</div>
            </div>
        </div>
    )
}

export  default  ShowBook;