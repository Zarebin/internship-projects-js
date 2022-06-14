import React from 'react';
import './Header.scss';
import { FormattedMessage } from 'react-intl';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Header() {
  return (
    <div className="Header">
      <div className="Header__Back">
        <ArrowBackIcon />
      </div>
      <MoreVertIcon />
    </div>
  );
}

export default Header;
