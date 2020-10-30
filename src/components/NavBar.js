import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className = {classes}>
      <AppBar position="static">
      <h1>Stephanie Sevadjian</h1>
        <Toolbar>
          <Button
            component={Link}
            to='/'
            color="inherit"
            >
            About Me
          </Button>
          <Button
            to='/portfolio'
            component={Link}
            color="inherit"
            >
            Portfolio
          </Button>
          <Button
            to='/contact'
            component={Link}
            color="inherit"
            >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
