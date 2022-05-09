
import React,{Component} from 'react';
import './styleRelatedSearch.scss';
import Thumbnail from './Thumbnail/Thumbnail';

const RelatedSearch = () =>{

    return (
        <div className="relatedInfo">
            <div className="relatedInfo__label">دیگران این موارد را جستجو کرده اند</div>
            <div className="relatedInfo__thumbnail">
                <Thumbnail/>
                <Thumbnail/>
                <Thumbnail/>
            </div>
        </div>)
}

export  default  RelatedSearch;