import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import groupProject1 from '../../src/images/groupProject1image.png';
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
          title="Night In"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Night In
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          This app takes the decision-making out of the night, so you can focus more on just enjoying it. Check us out here: <a href="https://tuanasaurus.github.io/groupProject1DinnerMovie/" target="_blank">Night In</a>
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