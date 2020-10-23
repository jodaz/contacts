import createAdminStore from './store';
import { history } from './utils';
import jsonServerProvider from 'ra-data-json-server';

export const dataProvider = jsonServerProvider('http://dev.sasi.loc/api');

export const store = createAdminStore({
  dataProvider,
  history
});

export {
  history
}