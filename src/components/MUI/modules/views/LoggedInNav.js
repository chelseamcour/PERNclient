import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import NavBar from '../components/NavBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import Button from '@material-ui/core/Button';
import withRoot from '../../modules/withRoot';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { white } from '@material-ui/core/colors';




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
  menuLink: {
    color: theme.palette.common.white,
  }
});

const LoggedInNav = (props) => {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      
      <NavBar position="fixed">
      <Toolbar className={classes.toolbar}>
<div className={classes.menuLink}>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon className={classes.menuLink}
        color="light"/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
            <Link
            color="inherit"
            underline="none"
            style={{ textDecoration: 'none' }}
            href="http://localhost:3003/logloot"
            >
            Log Loot
            </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link
            color="inherit"
            underline="none"
            style={{ textDecoration: 'none' }}
            href="http://localhost:3003/myloot"
            >
            My Loot
            </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} onClick={props.clickLogout}>
            <Link
            color="inherit"
            underline="none"
            style={{ textDecoration: 'none' }}
            href="http://localhost:3003"
            >
            Log Out
            </Link>
        </MenuItem>      </Menu>
      </div>
          {/* <div className={classes.left} /> */}
        
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
          {/* <div className={classes.right}> */}
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              style={{ textDecoration: 'none' }}
              className={classes.rightLink}
              href="http://localhost:3003/user/login"
            >
              {/* {'Log Out'} */}
            </Link>
        
            {/* <Link
              variant="h6"
              underline="none"
              style={{ textDecoration: 'none' }}
              className={clsx(classes.rightLink)}
              href="http://localhost:3003/user/signup"
            >
              {'Sign Up'}
            </Link> */}
            
            {/* <Button onClick={props.clearToken}>Log Out</Button> */}
        </Toolbar>
      </NavBar>
      <div className={classes.placeholder} />
    </div>
  );
}

LoggedInNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoggedInNav);