import React from 'react';
import { Admin, Resource } from 'react-admin';
import { setAuthToken, customRoutes } from './utils';
import jsonServerProvider from 'ra-data-json-server';
import { Login, Layout } from './components';
import { Provider, useDispatch } from 'react-redux';
import {
  store,
  history,
  dataProvider
} from './initializers';

export default function App() {
  if (localStorage.contacts) {
    setAuthToken(localStorage.contacts);
  }

  return (
    <Provider store={store}>
      <Admin
        layout={Layout} 
        dataProvider={jsonServerProvider(dataProvider)}
        title='Contacts List System'
        loginPage={Login}
        customRoutes={customRoutes}
        history={history}
      >
        {[]}
      </Admin>
    </Provider>
  );
}
