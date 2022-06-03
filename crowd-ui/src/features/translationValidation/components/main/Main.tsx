import React, {useState} from "react";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getSentenceFetch, postUserData} from "../../action";
import './main.scss';
import {selectSentences, selectLoading} from '../../slice';
import Button from "react-bootstrap/Button";


function Main() {
    const [state, setState] = React.useState(
        {inputUser: ''})

    const dispatch = useDispatch();
    const sentence: any = useSelector<any, any>(selectSentences);
    const isLoading: any = useSelector<any, any>(selectLoading);

    useEffect(() => {
        if (isLoading) {
            dispatch(getSentenceFetch());
        }
    }, [isLoading]);

    let mainSentence = '';
    let translateSentence = '';
    var sentencesId: any = null;
    if ("random" in sentence) {
        mainSentence = "name" in sentence.random ? sentence.random.name : '';
        translateSentence = "email" in sentence.random ? sentence.random.email : '';
        sentencesId = "id" in sentence.random ? sentence.random.id : null;
    }

    const getSendData = () => {
        return {
            sentencesId: sentencesId,
            userSentenceSelect: state.inputUser,
        };
    };

    function handleChange(e: any) {
        state.inputUser = e.target.value;
    };

    return (
        <>
            {isLoading && <p>Please waite</p>}
            {!isLoading &&
                <div className="container-main">
                    <div className="text">Are these translation correct?</div>
                    <div className="mainText"> {mainSentence} </div>
                    <div className="translationBox">
                        <div className="text__transition">{translateSentence} </div>
                        <div className="selfSelection">

                            <div className="checkMark">
                                <input
                                    name="choose"
                                    type="radio"
                                    value={'true'}
                                    onChange={handleChange}
                                />
                                <span>&#10003;</span>
                            </div>
                            <div className="checkMark">
                                <input
                                    name="choose"
                                    type="radio"
                                    value={'false'}
                                    onChange={handleChange}
                                />
                                <span>&#x2715;</span>
                            </div>
                        </div>
                    </div>
                    <div className="container-main__button">
                        <div className="space"></div>
                        <Button id="submit_button"
                                onClick={() => dispatch(postUserData(getSendData()))}
                                className="btn-primary">submit</Button>
                    </div>
                </div>
            }
        </>
    )
}

export default Main;