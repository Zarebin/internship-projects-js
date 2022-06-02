import {Route} from 'react-router-dom';
import Home from '../features/home/Home-page';
import {Counter} from '../features/counter/Counter'
import FoodFacts from '../features/foodFacts/FoodFacts';


const Routes = () =>{
    return(
        <>
            <Route exact path='/' component={Home}/>
            <Route path='/counter'  component={Counter}/>
            <Route exact path='/foodFacts'  component={FoodFacts}/>
        </>
    )

}

export default Routes