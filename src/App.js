import React from 'react';
import {Admin, Resource, EditGuesser}  from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';



import {UserList}  from './users';
import {PostList, PostEdit,PostCreate }  from './posts';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const dataProvider =jsonServerProvider('http://jsonplaceholder.typicode.com');

function App() {
  return (
   <Admin dataProvider={dataProvider}  authProvider={authProvider}  dashboard={Dashboard}>
     <Resource name="posts" list={PostList} edit={PostEdit}  create={PostCreate } icon={PostIcon}/>
     <Resource name="users" list={UserList} icon={UserIcon}/>
   </Admin>
     
  );
}

export default App;