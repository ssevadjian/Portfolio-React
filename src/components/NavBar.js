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

// import React, { Component } from 'react';
// import 'materialize-css';
// import { NavBar, Tab, NavItem, Tabs, Icon } from 'react-materialize';

// class Nav  {
//     render() {
//         return (
//             <Navbar
//             alignLinks="right"
//             brand={<a className="brand-logo" href="#">Logo</a>}
//             extendWith={<Tabs className="tabs-transparent"><Tab className="white-text" options={{duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false}} title="test 1">Test 1</Tab><Tab active className="white-text" options={{duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false}} title="test 2">Test 2</Tab><Tab className="white-text" disabled options={{duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false}} title="disabled tab">Disabled Tab</Tab><Tab className="white-text" options={{duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false}} title="test 4">Test 4</Tab></Tabs>}
//             id="mobile-nav"
//             menuIcon={<Icon>menu</Icon>}
//             options={{
//               draggable: true,
//               edge: 'left',
//               inDuration: 250,
//               onCloseEnd: null,
//               onCloseStart: null,
//               onOpenEnd: null,
//               onOpenStart: null,
//               outDuration: 200,
//               preventScrolling: true
//             }}
//           >
//             <NavItem onClick={function noRefCheck(){}}>
//               Getting started
//             </NavItem>
//             <NavItem href="components.html">
//               Components
//             </NavItem>
//           </Navbar>
//         )
//     }
// }

// export { Nav }
