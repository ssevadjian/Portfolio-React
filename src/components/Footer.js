import React from "react";
import "./footer.css";
import Particles from "react-tsparticles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Footer() {
  // const classes = useStyles();
  // const [value, setValue] = React.useState(0);
  return (
    <div class="card-footer text-muted">
      <ion-icon name="logo-facebook"></ion-icon>
    2 days ago
  </div>
    // <div className="footer">
    //   <BottomNavigation
    //     value={value}
    //     onChange={(event, newValue) => {
    //       setValue(newValue);
    //     }}
    //     showLabels
    //     className={classes.root}
    //   >
    //     <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
    //     <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    //     <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    //     <Particles
    //       options={{
    //         interactivity: {
    //           detectsOn: "canvas",
    //           events: {
    //             onClick: {
    //               enable: true,
    //               mode: "push",
    //             },
    //             onHover: {
    //               enable: true,
    //               mode: "repulse",
    //             },
    //             resize: true,
    //           },
    //           modes: {
    //             bubble: {
    //               distance: 400,
    //               duration: 2,
    //               opacity: 0.8,
    //               size: 40,
    //             },
    //             push: {
    //               quantity: 4,
    //             },
    //             repulse: {
    //               distance: 200,
    //               duration: 0.4,
    //             },
    //           },
    //         },
    //         particles: {
    //           color: {
    //             value: "#3cd1c2",
    //           },
    //           collisions: {
    //             enable: true,
    //           },
    //           move: {
    //             direction: "none",
    //             enable: true,
    //             outMode: "bounce",
    //             random: false,
    //             speed: 1,
    //             straight: false,
    //           },
    //           size: {
    //             random: true,
    //             value: 2,
    //           },
    //           detectRetina: true,
    //         },
    //       }}
    //     />
    //   </BottomNavigation>
    // </div>
  );
}
