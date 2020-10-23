import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { isEmpty } from '../utils';
import {
  useNotify
} from 'react-admin';
import {
  makeStyles,
  TextField,
  Button
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { login } from '../actions';
import { useDispatch } from 'react-redux';
// Layout
import Auth from './Auth';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const [errors, setErrors] = useState({});
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const notify = useNotify();
  const { token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (!isEmpty(token)) {
      axios.get(`/activate-account/${token}`)
        .then(res => notify(res.data.message))
        .catch(err => notify(err.data.message));
    }
  }, []);

  return (
    <Auth title='Sign in'>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          error={errors.email && true}
          margin="normal"
          fullWidth
          id="login"
          label="Email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          required
          helperText={errors.email && 'Introduce your email.'}
        />
        <TextField
          variant="outlined"
          error={errors.password && true}
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={e => setPassword(e.target.value)}
          required
          helperText={errors.password && 'Enter your password'}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          startIcon={<ExitToAppIcon />}  
        >
          Login
        </Button>
        <RouterLink to='/register'>Sign Up</RouterLink>
      </form>
    </Auth>
  );
};

export default Login;
