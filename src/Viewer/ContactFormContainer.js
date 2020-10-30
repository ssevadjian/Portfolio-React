import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const useFormStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function MediaCard() {
  const classes = useStyles();
  const fclasses = useFormStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <form className={fclasses.root} noValidate autoComplete="off">
            <div>
              <TextField
                id="standard-textarea"
                label="First Name:"
                placeholder=""
                value={value}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="standard-textarea"
                label="Last Name:"
                placeholder=""
              />
            </div>
            <div>
              <TextField
                id="standard-multiline"
                label="Message:"
                multiline
                rows={4}
                defaultValue=""
              />
            </div>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
