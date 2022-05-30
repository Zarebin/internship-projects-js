import React from "react";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getSentenceFetch} from "../../action";
import './main.scss'
import SelfSelection from '../selfSelection/SelfSelection'


function Main() {

    //first sentences:src/app/store.js(sentences in reducer), second one is sentences from slice(initialState)
    const sentences = useSelector((state:any) => state.sentenceSlice.sentences);
    const step = useSelector((state:any) => state.sentenceSlice.step);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSentenceFetch());
    }, [dispatch]);
    return (
        <>
            {sentences.length == 0 && <p>Please waite</p>}
            {sentences.length !== 0 &&
                <div className="container-main">
                    <div className="text">Are these translation correct?</div>
                    <div className="mainText"> {sentences.data[step].name} </div>
                    <div className="translationBox">
                        <div className="text__transition">{sentences.data[step].email} </div>
                        <SelfSelection />
                    </div>

                </div>
            }
        </>
    )
}

export default Main;