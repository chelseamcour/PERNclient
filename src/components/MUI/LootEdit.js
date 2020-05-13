import withRoot from './modules/withRoot';
import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Medal from '../../assets/medal.svg';
import Tshirt from '../../assets/tshirt.svg';
import Snack from '../../assets/snack.svg';
import Photo from '../../assets/photo.svg';
import Typography from './modules/components/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppForm from './modules/views/AppForm';
import Button from '@material-ui/core/Button';
import FormButton from './modules/forms/FormButton';
import Link from '@material-ui/core/Link';



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

const LootEdit = (props) => {
    const classes = useStyles();
    const [editRaceName, setEditRaceName] = useState(props.logToUpdate.raceName);
    const [editRaceDate, setEditRaceDate] = useState(props.logToUpdate.raceDate);
    const [editRaceCity, setEditRaceCity] = useState(props.logToUpdate.raceCity);
    const [editRaceState, setEditRaceState] = useState(props.logToUpdate.raceState);
    const [editRaceCountry, setEditRaceCountry] = useState(props.logToUpdate.raceCountry);
    const [editRaceDistance, setEditRaceDistance] = useState(props.logToUpdate.raceDistance);
    // const [editMedal, setEditMedal] = useState(props.logToUpdate.medal);
    const [editMedalRating, setEditMedalRating] = useState(props.logToUpdate.medalRating);
    // const [editTshirt, setEditTshirt] = useState(props.logToUpdate.tshirt);
    const [editTshirtRating, setEditTshirtRating] = useState(props.logToUpdate.tshirtRating);
    // const [editSnacks, setEditSnacks] = useState(props.logToUpdate.snacks);
    const [editSnacksRating, setEditSnacksRating] = useState(props.logToUpdate.snacksRating);
    const [editPhotos, setEditPhotos] = useState(props.logToUpdate.photos);
    const [editId, setEditId] = useState(props.logToUpdate.id);
    const [hoverMedal, setHoverMedal] = React.useState(-1);
    const [hoverTshirt, setHoverTshirt] = React.useState(-1);
    const [hoverSnacks, setHoverSnacks] = React.useState(-1);
    const [value, setValue] = React.useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClick = () => {
    //     setOpen(true);
    //   };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        // setOpen(false);
      };

    console.log(editId, "LOOT EDIT")

    const logUpdate = (event, log) => { 
        event.preventDefault();
        fetch(`${APIURL}/log/${editId}`, {
            method: 'PUT',
            body: JSON.stringify({
                raceName: editRaceName, raceDate: editRaceDate,
                raceCity: editRaceCity, raceState: editRaceState, raceCountry: editRaceCountry,
                raceDistance: editRaceDistance,
                medalRating: editMedalRating, tshirtRating: editTshirtRating, snacksRating: editSnacksRating,
                photos: editPhotos
        }),
            headers: new Headers({ 
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchLogs(); 
            props.updateOff();
        })
        
    }
    return(
        <Modal isOpen={true}>
            <AppForm>
            {/* <ModalHeader>Edit Your Loot</ModalHeader> */}
            <ModalBody>
                <form onSubmit={logUpdate}>
                <TextField 
        label="Race Name"
        defaultValue="raceName"
        onChange={(e) => setEditRaceName(e.target.value)}
        value={editRaceName}
        fullWidth
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
        onChange={(e) => setEditRaceDate(e.target.value)}
        value={editRaceDate}
        fullWidth
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
        onChange={(e) => setEditRaceDistance(e.target.value)}
        value={editRaceDistance}
        fullWidth
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
        onChange={(e) => setEditRaceCity(e.target.value)}
        value={editRaceCity}
        fullWidth
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
        onChange={(e) => setEditRaceState(e.target.value)}
        value={editRaceState}
        fullWidth
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
        onChange={(e) => setEditRaceCountry(e.target.value)}
        value={editRaceCountry}
        fullWidth
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

    <Grid item xs>
      <div className={classes.root}>
        <Typography>Medal</Typography>
        {/* <FormLabel component="legend">Medal</FormLabel> */}
        <Rating
          label="rating"
          labelPlacement="top"
          placeholder=""
          name="medal rating"
          value={editMedalRating}
          precision={1}
          onChange={(e) => setEditMedalRating(e.target.value)}
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
     
      <Grid item xs>
      <div className={classes.root}>
      <Typography>Tshirt</Typography>
      {/* <FormLabel component="legend">Tshirt</FormLabel> */}
        <Rating
          name="tshirt rating"
          value={editTshirtRating}
          precision={1}
          onChange={(e) => setEditTshirtRating(e.target.value)}
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
     
      <Grid item xs>
      <div className={classes.root}>
      <Typography>Snacks</Typography>
        <Rating
          name="snacks rating"
          precision={1}
          value={editSnacksRating}
          onChange={(e) => setEditSnacksRating(e.target.value)}
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
        onChange={(e) => setEditPhotos(e.target.value)}
        value={editPhotos}
        fullWidth
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
    <FormButton type="submit" color="secondary" fullWidth>Update your loot!</FormButton>
    <Typography variant="body2" align="center">
        <Button type="submit" align="center" onClick={handleClose}>Cancel</Button>
    </Typography>
      </form>
    </ModalBody>
    </AppForm>
    </Modal>
    );
};

export default withRoot(LootEdit);