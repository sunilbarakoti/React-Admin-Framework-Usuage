import React from 'react';
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import postEdit from './components/postEdit'

function App() {
  return (
    <Admin dataProvider={jsonServerProvider('http://localhost:3000')} >
      <Resource name='posts' list={PostList} create={PostCreate} edit={postEdit} />
    </Admin>
  );
}

export default App;
