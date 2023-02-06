import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ marginRight: '5px' }}>
              Redux
            </Link>
            <Link to="/formik" style={{ marginRight: '5px' }}>
              Formik
            </Link>
            <Link to="/MUIFormik" style={{ marginRight: '5px' }}>
              MUIFormik
            </Link>
            <Link to="/confirm" style={{ marginRight: '5px' }}>
              Confirm
            </Link>
            <Link to="/login" style={{ marginRight: '5px' }}>
              Login
            </Link>
            <Link to="/client" style={{ marginRight: '5px' }}>
              Client
            </Link>
            <Link to="/clients" style={{ marginRight: '5px' }}>
              Clients
            </Link>
            <Link to="/session" style={{ marginRight: '5px' }}>
              Session
            </Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
