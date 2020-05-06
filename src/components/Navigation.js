import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import cookie from 'cookie'


const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    fontWeight: "normal",
    color: "white",
    textDecoration: "none"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  const logout = () => {
    document.cookie = cookie.serialize('loggedIn', 'false')
    window.location.replace("/")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Link className={classes.button} to="/">
            <Button color="inherit">Listings</Button>
          </Link>
          <Link className={classes.button} to="/addlisting">
            <Button color="inherit">Add Listing</Button>
          </Link>

          {(document.cookie === "loggedIn=true") ?
            <Button onClick={() => logout()} color="inherit">Logout</Button> :
            <Link className={classes.button} to="login">
              <Button color="inherit">Login</Button>
            </Link>}

        </Toolbar>
      </AppBar>
    </div>
  );
}