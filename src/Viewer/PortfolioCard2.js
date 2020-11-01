import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import groupProject1 from '../../src/images/workDayImage.png';
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
          title="Work Day Planner"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Work Day Planner
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Need a nice, readable page to record your daily work day schedule? Why not try out my day planner here?: <a href="https://ssevadjian.github.io/Day-Planner/" target="_blank">Work Day Planner</a>
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