import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  name: {
    width: '100px'
  },
  container: {
    width: '80%',
    alignSelf: 'center'
  }
});

export default function ListingContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.businesses.map((business) => (
              <TableRow key={business.name}>
                {/* <TableCell component="th" scope="row">
                {business.name}
              </TableCell> */}
                <TableCell className={classes.name} align="right">{business.businessName}</TableCell>
                <TableCell align="right">{business.address}</TableCell>
                <TableCell align="right">{business.description}</TableCell>
                <TableCell align="right">{business.operatingHours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


// import React from 'react'
// import Listing from './Listing'

// const ListingContainer = (props) => {
//   const data = props.businesses;

//   console.log(props)
//     return (
//         <div>
//           {data.map((business, i) => (
//             <Listing
//             key={i}
//             name={business.businessName}
//             description={business.description}
//             address={business.address}
//             hours={business.hours}
//             />
//           ))}
//         </div>
//     )
// }

// export default ListingContainer