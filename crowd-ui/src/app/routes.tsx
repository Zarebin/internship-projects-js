import { Routes, Route } from 'react-router-dom';
import Home from '../features/home/Home-page';
import {Counter} from '../features/counter/Counter'


const AppAllRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/counter' element={<Counter />}/>
        </Routes>
    )

}

export default AppAllRoutes