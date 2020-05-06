import React from 'react';
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30px auto',
    display: 'flex',
    flexFlow: 'column',
    maxWidth: 500,
  },
  button: {
    width: 30,
    margin: '12px'
  }
}));

export default function AddListing(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    businessName: '',
    description: '',
    address: '',
    operatingHours: '',
  });

  const handleTextChange = (e) => {
    const newState = { ...state }
    newState[e.target.id] = e.target.value
    setState(newState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = { ...state }
    payload.id = props.businesses.length + 1
    props.addListing(payload)
    e.target.reset()
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={classes.root}
      noValidate autoComplete="off">
      <TextField onChange={(e) => handleTextChange(e)} id="businessName" label="Company Name" />
      <TextField onChange={(e) => handleTextChange(e)} id="description" label="Description" />
      <TextField onChange={(e) => handleTextChange(e)} id="address" label="Address" />
      <TextField onChange={(e) => handleTextChange(e)} id="operatingHours" label="Hours of Operation" />
      <Button
        type="submit"
        className={classes.button}
        variant="contained"
        color="primary" >Submit</Button>
    </form>
  );
}