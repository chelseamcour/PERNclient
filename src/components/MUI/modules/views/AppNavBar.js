import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import NavBar from '../components/NavBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppNavBar(props) {
  const { classes } = props;

  return (
    <div>
      <NavBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            color="inherit"
            variant="h6"
            underline="none"
            style={{ textDecoration: 'none' }}
            className={classes.title}
            href="http://localhost:3003/"
          >
            {'Log Your Loot'}
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              style={{ textDecoration: 'none' }}
              className={classes.rightLink}
              href="http://localhost:3003/user/login"
            >
              {'Log In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              style={{ textDecoration: 'none' }}
              className={clsx(classes.rightLink)}
              href="http://localhost:3003/user/signup"
            >
              {'Sign Up'}
            </Link>
            {/* <Link
              variant="h6"
              underline="none"
              style={{ textDecoration: 'none' }}
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="http://localhost:3003/user/signup"
            >
              {'Log Out'}
            </Link> */}
            {/* <Button onClick={props.clearToken}>Log Out</Button> */}
          </div>
        </Toolbar>
      </NavBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppNavBar);