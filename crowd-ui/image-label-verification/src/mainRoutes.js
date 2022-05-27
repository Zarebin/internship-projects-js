import { Routes, Route } from 'react-router-dom';
import Home from './features/image-label-verification/components/First-page/First-page.component'
import ParentComponent from './components/parent-component/parent.component'
import Questions from './features/image-label-verification/ImageLabelVerification'



const AppAllRoutes = () =>{
    return(
        <Routes>
        <Route path='/' element={<ParentComponent />}/>
        <Route path='/imageLabelVerification' element={<Home />}/>
        <Route path='/questions' element={<Questions />}/>
      </Routes>
    )

}

export default AppAllRoutes