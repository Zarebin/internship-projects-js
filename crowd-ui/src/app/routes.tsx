import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../features/home/Home-page';
// import {Counter} from '../features/counter/Counter'
import FoodCompareBody from '../features/foodCompare/Body'

const Routes = () =>{
    return(
        <>
            <Route exact path='/' component={Home}/>
            {/* <Route exact path='/counter' component={Counter}/> */}
            <Route exact path='/foodCompare' component={FoodCompareBody}/>
        </>
    )

}

export default Routes