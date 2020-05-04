import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: '50px auto',
    minWidth: 275,
    maxWidth: 500,
    minHeight: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default function Business(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const business = props.businesses.filter(bus => bus.id == props.match.params.id)[0];

  console.log(props.businesses)
  console.log(business)

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        </Typography>
        <Typography variant="h4" component="h2">
          {business.businessName}
        </Typography>
        <Typography variant="h5" className={classes.pos} color="textSecondary">
        {business.address}
        <br />
        {business.operatingHours}
        </Typography>
        <Typography variant="body2" component="p">
        {business.description}
        </Typography>
      </CardContent>
    </Card>
  );
}