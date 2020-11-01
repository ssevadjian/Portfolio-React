import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import groupProject1 from '../../src/images/weatherDash.png';
import './portfolioCardMedia.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 220,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          height="140"
          image={groupProject1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Weather App
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Everyone always needs a quick way of knowing what the weather's going to be on any given day in any given area. Enter in any city to see the 5 day forecast here: <a href="https://ssevadjian.github.io/Weather-App/" target="_blank">Weather App</a>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          GitHub
        </Button>
        <Button size="small" color="primary">
          Like
        </Button>
      </CardActions>
    </Card>
  );
}