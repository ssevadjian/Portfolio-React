import React from 'react';
import NavBar from '../components/NavBar';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

export default function Home() {
   const classes = useStyles();
   return (
    <NavBar/>,
    <Avatar alt="my picture" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/90261217_10158014546514030_4166488760998952960_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=ptXRSr5g5f4AX9sexdq&_nc_ht=scontent-sjc3-1.xx&oh=b3749bd4e977baaea7d550368c972ae3&oe=5F756A33" className={classes.rounded}/>,
    <div>

    </div>
   ) 
}