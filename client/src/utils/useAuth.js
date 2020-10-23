import React, { useEffect } from 'react';
import { isEmpty, history } from './index';
import { useNotify } from 'react-admin';

const useAuth = () => {
  const notify = useNotify();

  useEffect(() => {
    if (isEmpty(localStorage.sasiToken)) {
      history.push('/login');
      notify('¡You must login!');
    }
  }, []);
 
  return true;
}

export default useAuth;
