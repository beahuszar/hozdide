import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import Faq from '../components/faq';
import history from '../history';
import style from '../styles/global.scss';

export default () => (
  <div>
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/gyik" exact component={Faq} />
      </Switch>
    </Router>
  </div>
);
