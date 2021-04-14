import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
// import Login from './pages/login/index';
import Energia from './pages/lipsticks/energia';
import Entusiasmo from './pages/lipsticks/entusiasmo';
import Intensidade from './pages/lipsticks/intensidade';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path ='/' component={Home} exact />
        {/* <Route path ='/login' component={Login} exact /> */}
        <Route path ='/energia' component={Energia} exact />
        <Route path ='/entusiasmo' component={Entusiasmo} exact />
        <Route path ='/intensidade' component={Intensidade} exact />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
