import { Routes, Route } from 'react-router-dom';
import Home from '../features/home/Home-page';
import {Counter} from '../features/counter/Counter'
import FoodFacts from '../features/foodFacts/FoodFacts';


const AppAllRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/counter' element={<Counter />}/>
            <Route path='/foodFacts' element={<FoodFacts />}/>
        </Routes>
    )

}

export default AppAllRoutes