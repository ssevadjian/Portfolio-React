import React, { Component } from "react";
import NavBar from "./NavBar";
//import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

export default class MainContainer extends Component {
  //const classes = useStyles();
  render() {
    return (
      <div class="container">
        <NavBar/>
      </div>
    );
  }
}
