import * as React from 'react';
import { Link } from 'react-router-dom';
// Layout
import Auth from './Auth';

export default () => {
  return (
    <Auth title={'¡Check your email!'}>
      <p>Go to <Link to='/'>home</Link></p>
    </Auth>
  );
};

