import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from '../components/header/header';
import Faq from '../components/faq';
import history from '../history';

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
