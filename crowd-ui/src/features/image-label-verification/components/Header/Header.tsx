import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../../../app/hooks';
import { clearQuestion } from '../../imageLabelVerificationSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: '#3F3F3F' }}>
      <Toolbar className="header flex-row-justify-between">
        <IconButton
          // FIXME: add onclick handler here.
          onClick={() => {}}
        >
          <MoreVertIcon />
        </IconButton>
        <h3 className="text-style"><FormattedMessage id="imageLabel.appName" /></h3>
        <IconButton
          onClick={() => {
            history.goBack();
            dispatch(clearQuestion());
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
