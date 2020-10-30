import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function ContactForm() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div class="form_bg">
        <TextField
          id="standard-textarea"
          label="First Name:"
          placeholder=""
          value={value}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField id="standard-textarea" label="Last Name:" placeholder="" />
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
      <Button variant="contained" color="primary">Submit</Button>
    </form>
  );
}
