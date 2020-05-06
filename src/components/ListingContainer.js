import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  name: {
    width: '100px'
  },
  description: {
    width: '300px'
  },
  hours: {
    width: '100px'
  },
  address: {
    width: '120px'
  },
  delete: {
    width: '1px'
  },
  container: {
    width: '80%',
    margin: '40px auto'
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ListingContainer(props) {
  const classes = useStyles();
  const checkAuth = () => (document.cookie === 'loggedIn=true') ? true : false;

  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Hours</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Remove Listing (admin only)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.businesses.map((business, i) => (
              <TableRow key={business.id}>
                <TableCell className={classes.name} align="right"><Link to={`/business/${business.id}`}>{business.businessName}</Link></TableCell>
                <TableCell className={classes.description} align="right">{business.description}</TableCell>
                <TableCell className={classes.hours} align="right">{business.operatingHours}</TableCell>
                <TableCell className={classes.address} align="right">{business.address}</TableCell>
                <TableCell className={classes.delete} align="right">

                  {(checkAuth()) ?
                    <Button
                      onClick={() => props.handleListingDelete(i)}
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      startIcon={<DeleteIcon />}
                    > Delete
                    </Button> :

                    <Button
                      variant="contained"
                      className={classes.button}
                      startIcon={<DeleteIcon />}
                    > Delete
                    </Button>}
                    
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}