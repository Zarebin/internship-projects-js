import React from 'react';

import Navbar from '../../features/translationValidation/components/navbar/Navbar'
import Main from '../../features/translationValidation/components/main/Main'
import Footer from '../../features/translationValidation/components/footer/Footer'

import './translationValidation.scss'
import Button from "react-bootstrap/Button";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {postUserSelect} from '../translationValidation/slice';
import {getSentenceFetch} from "../translationValidation/action";


function TranslationValidation() {

    const useSelect = useSelector((state:any) => state.sentenceSlice.useSelect);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <Navbar />
            <Main />
            <div className="container__button">
                <Button id="submit_button" onClick={() => dispatch(postUserSelect())}
                        className="btn-primary">submit</Button>
            </div>
            <Footer />
        </div>
    )
}

export default TranslationValidation;
