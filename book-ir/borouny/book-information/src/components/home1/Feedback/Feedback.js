import React,{Component} from 'react';
import './styleFeedback.scss';
import {ReactComponent as Like} from '../../../assets/like.svg';
import {ReactComponent as Dislike} from '../../../assets/dislike.svg';

const Feedback = () =>{

    return (
        <div className="Feedback">
            <div className="Feedback__label">آیا نتایج مورد نظر صحیح بود؟</div>
            <div>
                <button className="Feedback__icon"><Like /></button>
                <button className="Feedback__icon Feedback__icon--second"><Dislike/></button>
            </div>
        </div>)
}

export  default  Feedback;