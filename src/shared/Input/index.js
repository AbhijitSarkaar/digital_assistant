import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '0px',
      width: '100%',
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
      borderWidth: "1px"
    }
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
        id="outlined-basic" 
        placeholder={'Type your message....'}
        variant="outlined" 
        onChange={e => props.getInput(e.target.value)}
        value={props.inputText}
      />
    </form>
  );
}