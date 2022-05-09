import React,{Component} from 'react';
import './styleShowAuthorBook.scss';
import ShowBook from "./ShowBook/ShowBook";


const ShowAuthorBook = () =>{

    return (
        <div>
            <div className="title">زویا پیرزاد / کتاب‌ها‌</div>
            <ShowBook/>
            <ShowBook/>
        </div>
    )
}

export  default  ShowAuthorBook;