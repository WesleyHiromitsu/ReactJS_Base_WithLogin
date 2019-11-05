import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//PrivateRoute = rota privada
import PrivateRoute from './services/auth';

//Puxar as Pages(View)
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/" component={Logout} />
      <PrivateRoute path='/home' component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;