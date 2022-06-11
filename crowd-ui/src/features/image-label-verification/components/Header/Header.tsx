import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './Header.scss';
import { useAppDispatch } from '../../../../app/hooks';
import { clearQuestionWithSaga } from '../../Actions';

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: '#3F3F3F' }}>
      <Toolbar className="header flex-row-justify-between">
        <Link to="/" className="margin-icon">
          {/* <FontAwesomeIcon icon={faEllipsisV} /> */}
          <IconButton
            onClick={() => {
              dispatch(clearQuestionWithSaga());
            }}
          >

            <MoreVertIcon />
          </IconButton>
        </Link>

        <h3 className="text-style"><FormattedMessage id="imageLabel.appName" /></h3>

        <Link to="/imageLabelVerification">
          <IconButton onClick={() => {}}>
            <ArrowBackIcon />
          </IconButton>
        </Link>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
