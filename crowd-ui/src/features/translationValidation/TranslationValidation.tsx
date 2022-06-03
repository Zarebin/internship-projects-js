import React from 'react';
import Navbar from '../../features/translationValidation/components/navbar/Navbar'
import Main from '../../features/translationValidation/components/main/Main'
import Footer from '../../features/translationValidation/components/footer/Footer'
import "../../App.css"
import './translationValidation.scss'


export  function TranslationValidation() {
    return (
        <div className="App container">
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}


