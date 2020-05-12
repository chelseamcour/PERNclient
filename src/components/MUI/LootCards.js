import withRoot from './modules/withRoot';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
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
// import {Table, Button} from 'reactstrap';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
// import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'
import Medal from '../../assets/medal.svg';
import Tshirt from '../../assets/tshirt.svg';
import Snack from '../../assets/snack.svg';
import Photo from '../../assets/photo.svg';

// const Row = styled.div`
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     width: 100%
// `;

// const Column = styled.div`
// display: flex;
// flex-direction: column;
// flex: 1;
// `;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
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
      marginRight: 20,
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
}));

const LootCards = (props) => {
const classes = useStyles();
const [expanded, setExpanded] = React.useState(false);
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);

const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };  

  const handleClose = () => {
    setAnchorEl(null);
  };
const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteLog = (log) => { 
    fetch(`http://localhost:3002/log/${log.id}`, { 
        method: 'DELETE',
        headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token 
        })
    })
    .then(() => props.fetchLogs()) 
}
console.log('CARDS', props)

const logMapper = () => {
    return props.logs.map((log, index) => { 
        return(
         
            <Grid key={index} container spacing={12}>
        <Grid item xs spacing={3}>
            <Card>
            <CardHeader
              title={log.raceName}
              subheader={`${log.raceDistance} | ${log.raceCity}, ${log.raceState} ${log.raceCountry}`} 
              style={{textAlign: 'center' }}
              action={
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <MoreVertIcon/>
                </IconButton>
              }
            />
            {/* <Typography style={{textAlign: 'center' }}>{log.raceDate}</Typography>
            <Typography style={{textAlign: 'center' }}>{log.raceDistance}</Typography> */}
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                    <MenuItem onClick={() => {props.editUpdateLog(log); props.updateOn()}}>
                        <IconButton aria-label="edit"  color="primary">
                            <UpdateIcon />
                        </IconButton>
                    </MenuItem>                    
                    <MenuItem onClick={() => {deleteLog(log)}}>
                        <IconButton aria-label="delete" color="danger">
                            <DeleteIcon />
                        </IconButton>
                    </MenuItem>
                </Menu>
                <Grid container direction="row" alignItems="center" spacing={14}>
                <Grid item xs>   
            <CardContent>
            <img
                  src={Medal}
                  alt="medal"
                  className={classes.image}
                />
               <Rating
                    label="medal rating"
                    labelPlacement="top"
                    name="medal rating"
                    value={log.medalRating}
                    readOnly
                    style={{align: 'right' }}
                />
            </CardContent>
            </Grid>
            <Grid item xs>   
            <CardContent>
            <img
                  src={Tshirt}
                  alt="tshirt"
                  className={classes.image}
                />
                <Rating
                    label="tshirt rating"
                    labelPlacement="top"
                    name="tshirt rating"
                    value={log.tshirtRating}
                    readOnly
                />
            </CardContent>
            </Grid>
            <Grid item xs>
            <CardContent>
            <img
                  src={Snack}
                  alt="snack"
                  className={classes.image}
                />
                <Rating
                    label="snacks rating"
                    labelPlacement="top"
                    name="snacks rating"
                    value={log.snacksRating}
                    readOnly
                />
            </CardContent>
            </Grid>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" spacing={14}>
            <Grid item xs="auto">   
            <CardContent alignItems="center">
            <img
                  src={Photo}
                  alt="photo"
                  className={classes.image}
                />
                <Link href={log.photos} target="_blank">
                    {`${log.photos}`}
                </Link>
            </CardContent>
            </Grid>
            </Grid>
          </Card>
          </Grid>
          </Grid>
        )
    })
}

  return (
    // const classes = useStyles();
    <Card className={classes.root}>
        
        {logMapper()}
      {/* <CardHeader
        title="Race Name"
        subheader="Race Date | Location | Distance"
        style={{textAlign: 'center' }}
      /> */}
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      {/* <CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
};
export default withRoot(LootCards);

