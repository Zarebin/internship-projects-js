import React from 'react';
import './footer.scss';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { postUserData } from '../../slice';

function Footer() {
  const dispatch = useDispatch();

  return (
    <div className="footer">
      <a className="footer-a " href=" # ">
        <ChevronLeft />
        previous
      </a>
      <a className="footer-a " href=" # " onClick={() => dispatch(postUserData('noneSelect'))}>
        skip
        <ChevronRight />
      </a>
    </div>
  );
}

export default Footer;
