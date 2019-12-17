import React from 'react';
import { Router } from 'react-router-dom';
import Header from '../components/header';
import history from '../history';

export default () => (
  <div>
    <Router history={history}>
      <Header />
      <div>Hello world!</div>
    </Router>
  </div>
);
