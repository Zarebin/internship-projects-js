import { Routes, Route } from 'react-router-dom';
import Home from '../features/home/Home-page';
import {Counter} from '../features/counter/Counter'
import {TranslationValidation} from '../features/translationValidation/TranslationValidation'

const AppAllRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/counter' element={<Counter />}/>
            <Route path='/translationValidation' element={<TranslationValidation />}/>
        </Routes>
    )

}

export default AppAllRoutes