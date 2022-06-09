import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className="header flex-row-justify-between">
    <Link to="/imageLabelVerification">
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>

    <Link to="/" className="margin-icon">
      <FontAwesomeIcon icon={faEllipsisV} />
    </Link>
  </div>
);

export default Header;
