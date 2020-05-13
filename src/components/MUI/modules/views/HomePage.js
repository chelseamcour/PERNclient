import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import HomePageLayout from './HomePageLayout';
import homepage from '../../../../assets/homepage.png';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Medal from '../../../../assets/medal.svg';
import Tshirt from '../../../../assets/tshirt.svg';
import Snack from '../../../../assets/snack.svg';
import FormButton from '././../forms/FormButton';
// import APIURL from '../../../../helpers/environment';


const backgroundImage = homepage;

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${homepage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function HomePage(props) {
  const { classes } = props;

  return (
    <HomePageLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="#DDDDE0" align="center" variant="h3">
        You've Logged Your Time...
      </Typography>
      <Typography color="#DDDDE0" align="center" variant="h3" marked="center">
        Now Log Your Loot
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Keep track of all your race swag in one place!
      </Typography>
      {/* <Grid container spacing={14}> */}
        {/* <Grid item xs={2} sm={6}>    */}
      <FormButton
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="https://cmc-blue-lootlog-client.herokuapp.com/user/signup"
        >
        Start Logging
      </FormButton>
     
      {/* <FormButton
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="http://localhost:3003/user/login"
      >
        Log In
      </FormButton> */}
      {/* </Grid> */}
      {/* </Grid> */}
    </HomePageLayout>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);