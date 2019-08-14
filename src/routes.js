import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import Dashboard from './pages/dashboard/dashboard';
import Contacts from './pages/contacts/contacts';
import Notifications from './pages/notifications/notifications';
import { config } from './api/config';
import { Header, Footer } from './containers';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={'/'} component={Home} exact />
        <Route path={config.APP_PATHS.dashboard} component={Dashboard} />
        <Route path={config.APP_PATHS.contacts} component={Contacts} />
        <Route
          path={config.APP_PATHS.notifications}
          component={Notifications}
        />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
