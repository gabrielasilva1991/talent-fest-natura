import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import Login from './pages/login/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path ='/' component={Home} exact />
        <Route path ='/login' component={Login} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
