import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import First from './pages/first/first';
import Second from './pages/second/second';
import { config } from './api/config';
import { Header } from './blocks';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={config.APP_PATHS.dashboard} component={Home} />
        <Route path={config.APP_PATHS.contacts} exact component={First} />
        <Route path={config.APP_PATHS.notifications} component={Second} />
      </Switch>
    </Router>
  );
};

export default Routes;
