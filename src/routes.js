import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import First from './pages/first/first';
import Second from './pages/second/second';
import { config } from './api/config';
import { Nav } from './components';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path={config.APP_PATHS.home} exact component={Home} />
        <Route path={config.APP_PATHS.first} exact component={First} />
        <Route path={config.APP_PATHS.second} exact component={Second} />
      </Switch>
    </Router>
  );
};

export default Routes;
