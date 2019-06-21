import React from 'react';

import BriefForm from './BriefForm'
import BriefList from './BriefList'

import {
  Grid,
} from '@material-ui/core';

import './app.css'

function App() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <BriefForm />
      </Grid>
      <Grid item xs={8}>
        <BriefList />
      </ Grid>
    </Grid>
  );
}

export default App;
