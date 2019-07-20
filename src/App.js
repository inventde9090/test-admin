import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud'
import UserIcon from '@material-ui/icons/Group';

import Dashboard from './Dashboard';
import authProvider from './authProvider';
import { GET_LIST } from 'ra-core';

import customeRoutes  from './customRoutes';
import Menu from './Menu';

const dataProvider = crudProvider('http://localhost:5000');


class App extends React.Component {

  render() {
    return (
      <Admin Menu={Menu} customeRoutes={customeRoutes} dataProvider={dataProvider}
             authProvider={authProvider} dashboard={Dashboard}>
        <Resource name="products" list={ListGuesser} edit={EditGuesser} icon={UserIcon} />
      </Admin>

    )

  }

  componentDidMount() {
    dataProvider(GET_LIST, 'products', {
      pagination: { page: 1, perPage: 10 },
      sort: { field: 'name', order: 'ASC' },
      filter: { id: 1 },
    })
      .then(response => console.log(response));

      dataProvider('GET_ONE','products',{id: 15})
      .then(response => console.log(response));
  }

}

export default App;
