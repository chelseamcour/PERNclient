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
import Medal from '../../assets/medal.svg';
import Tshirt from '../../assets/tshirt.svg';
import Snack from '../../assets/snack.svg';



const labels = {
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
}))

const LootCreate = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [valueTwo, setValueTwo] = React.useState(2);
  const [hoverMedal, setHoverMedal] = React.useState(-1);
  const [hoverTshirt, setHoverTshirt] = React.useState(-1);
  const [hoverSnacks, setHoverSnacks] = React.useState(-1);
  const [medal, setMedal] = useState('');
  const [medalRating, setMedalRating] = useState('');
  const [medalComments, setMedalComments] = useState('');
  const [tshirt, setTshirt] = useState('');
  const [tshirtRating, setTshirtRating] = useState('');
  const [tshirtComments, setTshirtComments] = useState('');
  const [snacks, setSnacks] = useState('');
  const [snacksRating, setSnacksRating] = useState('');
  const [snacksComments, setSnacksComments] = useState('');
  const [photos, setPhotos] = useState('');
  const [comments, setComments] = useState('');
  const [raceId, setRaceId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3002/loot/logloot', {
        method: 'POST',
        body: JSON.stringify({
            medal: medal, medalRating: medalRating, medalComments: medalComments,
            tshirt: tshirt, tshirtRating: tshirtRating, tshirtComments: tshirtComments,
            snacks: snacks, snacksRating: snacksRating, snacksComments: snacksComments,
            photos: photos, comments: comments, raceId: raceId}),
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }).then((res) => res.json())
    .then((logData) => {
        console.log(logData);
        setMedal('');
        setMedalRating('');
        setMedalComments('');
        setTshirt('');
        setTshirtRating('');
        setTshirtComments('');
        setSnacks('');
        setSnacksRating('');
        setSnacksComments('');
        setPhotos('');
        setComments('');
        setRaceId('');
        // props.fetchLogs();
    })
}

  return (
    <React.Fragment>
      <AppNavBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Log Your Loot
          </Typography>
        </React.Fragment>

        <form
        onSubmit={handleSubmit}
        >
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <img
                  src={Medal}
                  alt="medal"
                  className={classes.image}
                />
      </Grid>
       <Grid item xs={12} sm={6}>
       <Typography>Medal</Typography>
        
       <FormControl component="fieldset">
        {/* <FormLabel component="legend">Medal</FormLabel> */}
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
      <div className={classes.root}>
        <Typography>Rating</Typography>
        <Rating
          label="rating"
          labelPlacement="top"
          name="medal rating"
          value={medalRating}
          precision={1}
          onChange={(e) => setMedalRating(e.target.value)}
          onChangeActive={(event, newHoverMedal) => {
            setHoverMedal(newHoverMedal);
          }}
        />
        {value !== null && <Box ml={2}>{labels[hoverMedal !== -1 ? hoverMedal : value]}</Box>}
      </div>
      <TextField 
        label="Comments"
        defaultValue="medalComments"
        onChange={(e) => setMedalComments(e.target.value)}
        value={medalComments}
        fullWidth
        name="medal comments"
        margin="normal"
        multiline
        variant="outlined"
        rowsMax={4}
      >
      </TextField>
      </Grid>
      </Grid>
     

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
      <div className={classes.root}>
        <Rating
          name="tshirt rating"
          value={tshirtRating}
          precision={1}
          onChange={(e) => setTshirtRating(e.target.value)}
          onChangeActive={(event, newHoverTshirt) => {
            setHoverTshirt(newHoverTshirt);
          }}
        />
        {value !== null && <Box ml={2}>{labels[hoverTshirt !== -1 ? hoverTshirt : value]}</Box>}
      </div>
      <TextField 
        label="Tshirt Comments"
        defaultValue="tshirtComments"
        onChange={(e) => setTshirtComments(e.target.value)}
        value={tshirtComments}
        fullWidth
        name="tshirt comments"
        margin="normal"
        multiline
        variant="outlined"
        rowsMax={4}
      >
      </TextField>

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
      <div className={classes.root}>
        <Rating
          name="snacks rating"
          value={snacksRating}
          precision={1}
          onChange={(e) => setSnacksRating(e.target.value)}
          onChangeActive={(event, newHoverSnacks) => {
            setHoverSnacks(newHoverSnacks);
          }}
        />
        {value !== null && <Box ml={2}>{labels[hoverSnacks !== -1 ? hoverSnacks : value]}</Box>}
      </div>
       <TextField 
        label="Snacks Comments"
        defaultValue="snacksComments"
        onChange={(e) => setSnacksComments(e.target.value)}
        value={snacksComments}
        fullWidth
        name="snacks comments"
        margin="normal"
        multiline
        variant="outlined"
        rowsMax={4}
       >
       </TextField>
       <TextField 
        label="Photos"
        defaultValue="photos"
        onChange={(e) => setPhotos(e.target.value)}
        value={photos}
        fullWidth
        name="photos"
        margin="normal"
        multiline
        variant="outlined"
        rowsMax={2}
       >
       </TextField>
       <TextField 
        label="Comments"
        defaultValue="comments"
        onChange={(e) => setComments(e.target.value)}
        value={comments}
        fullWidth
        name="comments"
        margin="normal"
        multiline
        variant="outlined"
        rowsMax={4}
       >
       </TextField>

       <TextField 
        label="Race ID"
        defaultValue="raceID"
        onChange={(e) => setRaceId(e.target.value)}
        value={raceId}
        fullWidth
        name="race id"
        margin="normal"
       >
       </TextField>
    <Button
    type="submit"
    color="secondary"
    fullWidth
    >
    Submit
    </Button>
    </form>
  </AppForm>
  <AppFooter />
  </React.Fragment>
)}

export default withRoot(LootCreate);