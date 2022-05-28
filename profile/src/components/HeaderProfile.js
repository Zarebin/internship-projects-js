import React from "react";
import NewIcon from './Icon';
import { Route, Link, BrowserRouter } from 'react-router-dom'

export default function Header(){
    return(
        <div>
            <Link to='Back'><NewIcon/></Link>
            <p className='wrapper__title'>پروفایل</p>
        </div>
    )
}