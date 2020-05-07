import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import HomePageLayout from './HomePageLayout';
import homepage from '../../../../assets/homepage.png';

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
      <Typography color="inherit" align="center" variant="h3" marked="center">
        You've Logged Your Time...Now Log Your Loot
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Keep track of all your race swag - medals, tshirts, snacks, and more!
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="http://localhost:3003/user/signup"
      >
        Sign Up
      </Button>
    </HomePageLayout>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);