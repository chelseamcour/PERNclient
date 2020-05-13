import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppNavBar from './modules/views/AppNavBar';
import AppForm from './modules/views/AppForm';
// import { email, required } from './modules/forms/validation';
import RFTextField from './modules/forms/RFTextField';
import FormButton from './modules/forms/FormButton';
import FormFeedback from './modules/forms/FormFeedback';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Sitebar from './Sitebar';
import APIURL from '../../helpers/environment';


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

const LogIn = (props) => {
  console.log(props)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  // const [sent, setSent] = React.useState(false);

  // const validate = (values) => {
  //   const errors = required(['firstName', 'lastName', 'email', 'password'], values);

  //   if (!errors.email) {
  //     const emailError = email(values.email, values);
  //     if (emailError) {
  //       errors.email = email(values.email, values);
  //     }
  //   }

  //   return errors;
  // };

  // const handleSubmit = () => {
  //   setSent(true);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}user/login`, {
        method: 'POST',
        body: JSON.stringify({email: email, password: password}),
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
      <AppForm>
      <React.Fragment>
      <Typography variant="h3" gutterBottom marked="center" align="center">
        Log In
      </Typography>
      {/* <Typography variant="body2" align="center">
        <Link href="http://localhost:3003/user/signup" underline="always">
Need to make an account?
        </Link>
      </Typography> */}
      </React.Fragment>
      <form onSubmit={handleSubmit}>
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
       >
       </TextField>
       <FormButton
       type="submit"
       color="secondary"
       fullWidth
       >
         Log In
       </FormButton>
      </form>
      </AppForm>
      {/* <Sitebar /> */}
      {/* <AppFooter /> */}
    </React.Fragment>
  )}

export default withRoot(LogIn);