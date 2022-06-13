import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './header.scss';

export default function Header() {
  const history = useHistory();
  return (
    <div className="container-header">
      <AppBar
        position="fixed"
        sx={{ backgroundColor: 'white', color: '#3F3F3F' }}
      >
        <Toolbar>
          <IconButton
            data-category="validation"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              history.goBack();
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <Typography
            className="center"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center' }}
          >
            <FormattedMessage id="translation.header" />
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}
