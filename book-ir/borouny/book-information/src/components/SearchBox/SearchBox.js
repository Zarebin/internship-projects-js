import React from "react";
import './styleSearchBox.scss'
import {ReactComponent as SearchIcon} from '../../assets/searchIcon.svg'
import CloseButton from '../../assets/closeButton.png'
import Logo from '../../assets/Logo.png'


const SearchBox = () =>{

    return (
        <div className="content">
            <div className="content__Logo"><img src={Logo}/></div>
            <div className="content__SearchBox">
                <div className="SearchBox__searchIcon"><SearchIcon/></div>
                <div className="SearchBox__inputSearch"><input className="SearchBox__inputSearch" placeholder="جستجو کنید"/></div>
                <div className="SearchBox__closeButton" ><button className="SearchBox__closeButton">&#9747;</button></div>
            </div>
            <div className="content__tabs">
                <div className="tabs__allTab tabs__allTab--active">همه</div>
                <div className="tabs__allTab">تصویر</div>
                <div className="tabs__allTab">رسانه</div>
                <div className="tabs__allTab">آوا</div>
                <div className="tabs__allTab">بازار</div>
                <div className="tabs__allTab">سریال</div>
            </div>
        </div>)
}

export  default  SearchBox;

