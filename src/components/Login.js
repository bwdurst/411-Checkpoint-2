import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import cookie from 'cookie';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
      button: {
        width: 30,
        margin: '12px'
      }
}));

const login = () => {
  document.cookie = cookie.serialize('loggedIn', 'true', {
    maxAge: 60 * 1000
  })

  window.location.replace("/")
}

export default function Login(props) {
  const classes = useStyles();
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Email" />
      <TextField id="standard-basic" label="Password" />
      <Button 
      onClick={() => login()}
      className={classes.button} 
      variant="contained" 
      color="primary" >Submit</Button>
    </form>
  );
}