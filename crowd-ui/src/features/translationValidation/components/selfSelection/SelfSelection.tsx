import React from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import './selfSelection.scss'
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {sentenceSlice} from '../../slice';
import {checkUserSelector} from "../../slice";
import {getSentenceFetch} from "../../action";


function SelfSelection() {

    const useSelect = useSelector((state:any) => state.sentenceSlice.useSelect);
    const dispatch = useDispatch();
    console.log('user select : ', useSelect);
    return (
            <div className="selfSelection">

                <div className="checkMark">
                    <input
                        name="choose"
                        type="radio"
                        onChange={() => {dispatch(checkUserSelector(1))}}
                    />
                    <span>&#10003;</span>
                </div>
                <div className="checkMark">
                    <input
                        name="choose"
                        type="radio"
                        onChange={() => dispatch(checkUserSelector(0))}
                    />
                    <span>&#x2715;</span>
                </div>
            </div>
    )


}

export default SelfSelection;