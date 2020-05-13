import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, {useState, useEffect} from 'react';
import APIURL from '../../helpers/environment';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppNavBar from './modules/views/AppNavBar';
import AppForm from './modules/views/AppForm';
// import { email, required } from './modules/forms/validation';
// import RFTextField from './modules/forms/RFTextField';
import FormButton from './modules/forms/FormButton';
import FormFeedback from './modules/forms/FormFeedback';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
}));

const SignUp = (props) => {
  console.log(props)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/user/signup`, { //where `${APIURL}user/signup` goes
        method: 'POST',
        body: JSON.stringify({firstName: firstName, lastName: lastName, email: email, password: password}),
        headers: new Headers ({
            'Content-Type': 'application/json'
        })
    }).then(
        (response) => response.json()
    ).then((data) => {
        props.updateToken(data.sessionToken)
    })
}

  return (
    <React.Fragment>
      <AppNavBar />
      <AppForm >
      <React.Fragment>

      <Typography variant="h3" gutterBottom marked="center" align="center">
        Sign Up
      </Typography>
      {/* <Typography variant="body2" align="center">
        <Link href="http://localhost:3003/user/login" underline="always">
          Already have an account?
        </Link>
      </Typography> */}
      </React.Fragment>

      <form onSubmit={handleSubmit}>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
       <TextField 
        label="First Name"
        defaultValue="firstName"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        fullWidth
        required
        margin="normal"
        variant="outlined"
        rowsMax={2}
       >
       </TextField>
       </Grid>
       <Grid item xs={12} sm={6}>
       <TextField 
        label="Last Name"
        defaultValue="lastName"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        fullWidth
        required
        margin="normal"
        variant="outlined"
        rowsMax={2}
       >
       </TextField>
       </Grid>
       </Grid> */}
       <TextField 
        label="Email"
        defaultValue="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        fullWidth
        required
        name="email"
        margin="normal"
        variant="outlined"
        validator="isEmail"
        type="email"
        rowsMax={2}
       >
       </TextField>
       <TextField 
        label="Password"
        defaultValue="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        fullWidth
        required
        name="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        rowsMax={2}
        inputProps={{ minLength: 5 }}
       >
       </TextField>
       <FormButton
       type="submit"
       color="secondary"
       fullWidth
      //  href="http://localhost:3003/logloot"
       >
         Sign Up
       </FormButton>
      </form>
      </AppForm>
      {/* <AppFooter /> */}
    </React.Fragment>
  )}

export default withRoot(SignUp);