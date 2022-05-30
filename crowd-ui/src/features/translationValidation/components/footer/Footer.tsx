import React from "react";
import './footer.scss'
import {ChevronLeft, ChevronRight} from 'react-bootstrap-icons';
import {skipUserSelect} from "../../slice";
import {previousUserSelect} from "../../slice";
import {useDispatch, useSelector} from "react-redux";

function Footer() {
    const dispatch = useDispatch();

    return (
        <div className="footer">
            <a className="footer-a " onClick={() => dispatch(previousUserSelect())}><ChevronLeft/>previous</a>
            <a className="footer-a " onClick={() => dispatch(skipUserSelect())}>skip <ChevronRight/></a>
        </div>
    )


}

export default Footer;