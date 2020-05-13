import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppNavBar from './modules/views/AppNavBar';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/forms/validation';
import RFTextField from './modules/forms/RFTextField';
import FormButton from './modules/forms/FormButton';
import FormFeedback from './modules/forms/FormFeedback';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Button from './modules/components/Button';
import Medal from '../../assets/medal.svg';
import Tshirt from '../../assets/tshirt.svg';
import Snack from '../../assets/snack.svg';
import Photo from '../../assets/photo.svg';
import LoggedInNav from './LoggedInNav';
// import Snackbar from './modules/views/Snackbar';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import APIURL from '../../helpers/environment';


const labels = {
    0: 'N/A',
    1: 'Terrible',
    2: 'Mediocre',
    3: 'Average',
    4: 'Great',
    5: 'Excellent',
  };

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
},
image: {
  height: 55,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
},
}))

const LootCreate = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  // const [valueTwo, setValueTwo] = React.useState(2);
  const [hoverMedal, setHoverMedal] = React.useState(-1);
  const [hoverTshirt, setHoverTshirt] = React.useState(-1);
  const [hoverSnacks, setHoverSnacks] = React.useState(-1);
  const [raceName, setRaceName] = useState('');
  const [raceDate, setRaceDate] = useState('');
  const [raceCity, setRaceCity] = useState('');
  const [raceState, setRaceState] = useState('');
  const [raceCountry, setRaceCountry] = useState('');
  const [raceDistance, setRaceDistance] = useState('');
  // const [medal, setMedal] = useState('');
  const [medalRating, setMedalRating] = useState('');
  // const [tshirt, setTshirt] = useState('');
  const [tshirtRating, setTshirtRating] = useState('');
  // const [snacks, setSnacks] = useState('');
  const [snacksRating, setSnacksRating] = useState('');
  const [photos, setPhotos] = useState('');
  const [open, setOpen] = React.useState(false);
  const [sessionToken, setSessionToken] = useState('');

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
}

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/log/addlog`, {
        method: 'POST',
        body: JSON.stringify({
          raceName: raceName,
          raceDate: raceDate,
          raceCity: raceCity,
          raceState: raceState,
          raceCountry: raceCountry,
          raceDistance: raceDistance,
          // medal: medal,
          medalRating: medalRating,
          // tshirt: tshirt,
          tshirtRating: tshirtRating,
          // snacks: snacks,
          snacksRating: snacksRating,
          photos: photos}),
        headers: new Headers ({
          'Content-Type': 'application/json',
          'Authorization': props.token
        })
    }).then((res) => res.json())
    .then((logData) => {
        console.log(logData);
        setRaceName('');
        setRaceDate('');
        setRaceCity('');
        setRaceState('');
        setRaceCountry('');
        setRaceDistance('');
        // setMedal('');
        setMedalRating('');
        // setTshirt('');
        setTshirtRating('');
        // setSnacks('');
        setSnacksRating('');
        setPhotos('');
        // props.fetchLogs();
    })
}

  return (
    <React.Fragment>
            <LoggedInNav token={sessionToken} clickLogout={clearToken} onClick={props.clickLogout}/>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Log Your Loot
          </Typography>
        </React.Fragment>

        <form
        onSubmit={handleSubmit}
        >
        <TextField 
        label="Race Name"
        defaultValue="raceName"
        onChange={(e) => setRaceName(e.target.value)}
        value={raceName}
        fullWidth
        required
        name="race name"
        margin="normal"
        variant="outlined"
        rowsMax={2}
        >
        </TextField>
        <Grid container spacing={2}>
        <Grid item xs>
        <TextField 
        label="Date"
        defaultValue="raceDate"
        onChange={(e) => setRaceDate(e.target.value)}
        value={raceDate}
        fullWidth
        required
        name="race date"
        margin="normal"
        variant="outlined"
        rowsMax={2}
        helperText="YYYY-MM-DD"
        >
        </TextField>
        </Grid>
        <Grid item xs>
        <TextField 
        label="Distance"
        defaultValue="raceDistance"
        onChange={(e) => setRaceDistance(e.target.value)}
        value={raceDistance}
        fullWidth
        required
        name="race distance"
        margin="normal"
        variant="outlined"
        rowsMax={2}
        >
        </TextField>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs>
        <TextField 
        label="City"
        defaultValue="raceCity"
        onChange={(e) => setRaceCity(e.target.value)}
        value={raceCity}
        fullWidth
        required
        name="race city"
        margin="normal"
        variant="outlined"
        rowsMax={2}
        >
        </TextField>
        </Grid>
        <Grid item xs>
        <TextField 
        label="State"
        defaultValue="raceState"
        onChange={(e) => setRaceState(e.target.value)}
        value={raceState}
        fullWidth
        required
        name="race state"
        margin="normal"
        variant="outlined"
        rowsMax={2}
        >
        </TextField>
        </Grid>
        <Grid item xs>
        <TextField 
        label="Country"
        defaultValue="raceCountry"
        onChange={(e) => setRaceCountry(e.target.value)}
        value={raceCountry}
        fullWidth
        required
        name="race country"
        margin="normal"
        variant="outlined"
        rowsMax={2}
        >
        </TextField>
        </Grid>
        </Grid>
        
        <Grid container direction="row" alignItems="center" spacing={14}>
        <Grid item xs={3}>
        <img
                  src={Medal}
                  alt="medal"
                  className={classes.image}
                  
                />
      </Grid>
       {/* <Grid item xs>
       <Typography>Medal</Typography>
       <FormControl component="fieldset">
        <FormLabel component="legend">Medal</FormLabel>
        <RadioGroup
          row
          // label="Medal"
          name="medal"
          value={medal}
          onChange={(e) => setMedal(e.target.value)}
        >
          <FormControlLabel value="true" control={<Radio />} label="Yes" />
          <FormControlLabel value="false" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      </Grid> */}
      <Grid item xs>
      <div className={classes.root}>
        <Typography>Medal*</Typography>
        {/* <FormLabel component="legend">Medal</FormLabel> */}
        <Rating
          label="rating"
          labelPlacement="top"
          name="medal rating"
          value={medalRating}
          required
          minRating={0}
          precision={1}
          onChange={(e) => setMedalRating(e.target.value)}
          onChangeActive={(event, newHoverMedal) => {
            setHoverMedal(newHoverMedal);
          }}
        />
        {value !== null && <Box ml={2}>{labels[hoverMedal !== -1 ? hoverMedal : value]}</Box>}
      </div>
      </Grid>
      </Grid>

      <Grid container direction="row" alignItems="center" spacing={14}>
        <Grid item xs={3}>
        <img
                  src={Tshirt}
                  alt="tshirt"
                  className={classes.image}
                  
                />
      </Grid>
      {/* <Grid item xs>
     <Typography>Tshirt</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Tshirt</FormLabel>
        <RadioGroup
          row
          label="Tshirt"
          name="tshirt"
          value={tshirt}
          onChange={(e) => setTshirt(e.target.value)}
          >
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
          </RadioGroup>
      </FormControl>
      </Grid> */}
      <Grid item xs>
      <div className={classes.root}>
      <Typography>Tshirt*</Typography>
      {/* <FormLabel component="legend">Tshirt</FormLabel> */}
        <Rating
          name="tshirt rating"
          value={tshirtRating}
          required
          precision={1}
          onChange={(e) => setTshirtRating(e.target.value)}
          onChangeActive={(event, newHoverTshirt) => {
            setHoverTshirt(newHoverTshirt);
          }}
        />
        {value !== null && <Box ml={2}>{labels[hoverTshirt !== -1 ? hoverTshirt : value]}</Box>}
      </div>
      </Grid>
      </Grid>

      <Grid container direction="row" alignItems="center" spacing={14}>
        <Grid item xs={3}>
        <img
                  src={Snack}
                  alt="snack"
                  className={classes.image}
                  
                />
      </Grid>
      {/* <Grid item xs>
      <Typography>Snacks</Typography>
       <FormControl component="fieldset">
         <FormLabel component="legend">Snacks</FormLabel>
         <RadioGroup
          row
          label="Snacks"
          name="snacks"
          value={snacks}
          onChange={(e) => setSnacks(e.target.value)}
          >
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
          </RadioGroup>
      </FormControl>
      </Grid> */}
      <Grid item xs>
      <div className={classes.root}>
      <Typography>Snacks*</Typography>
        <Rating
          name="snacks rating"
          precision={1}
          value={snacksRating}
          required
          onChange={(e) => setSnacksRating(e.target.value)}
          onChangeActive={(event, newHoverSnacks) => {
            setHoverSnacks(newHoverSnacks);
          }}
        />
        {value !== null && <Box ml={2}>{labels[hoverSnacks !== -1 ? hoverSnacks : value]}</Box>}
      </div>
      </Grid>
      </Grid>

      <Grid container direction="row" alignItems="center" spacing={14}>
        <Grid item xs={3}>
      <img
                  src={Photo}
                  alt="photo"
                  className={classes.image}
                  
                />
                </Grid>
      <Grid item xs>
       <TextField 
        label="Photo URL"
        defaultValue="photos"
        onChange={(e) => setPhotos(e.target.value)}
        value={photos}
        fullWidth
        required
        name="photos"
        margin="normal"
        variant="outlined"
        rowsMax={2}
        helperText="example.com"
        // type="url"
       >
       </TextField>
       </Grid>
      </Grid>
      
    <FormButton
    type="submit"
    color="secondary"
    fullWidth
    onClick={handleClick}
    >
    Submit
    </FormButton>
    <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        color="#278FF0"
        message="Loot successfully added!"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </form>
  </AppForm>
  {/* <Button type="submit" onClick={props.clickLogout}>Logout</Button> */}
  {/* <AppFooter /> */}
  </React.Fragment>
)}

export default withRoot(LootCreate);