import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Medal from '../../../../assets/medal.svg';
import Tshirt from '../../../../assets/tshirt.svg';
import Snack from '../../../../assets/snack.svg';


const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function AppInfo(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {/* <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        /> */}
        <Typography variant="h4" marked="center"  component="h2">
        Track & Rate Your Race Swag!
        </Typography>
        <Typography variant="h5" align="center">
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src={Medal}
                  alt="medal"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Medals
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src={Tshirt}
                  alt="tshirt"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Tshirts
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src={Snack}
                  alt="snack"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Snacks
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component="a"
          href="https://cmc-blue-lootlog-client.herokuapp.com/user/signup"
          >
          Get started
        </Button>
      </Container>
    </section>
  );
}

AppInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppInfo);