import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import Energia from './pages/lipsticks/energia';
import Entusiasmo from './pages/lipsticks/entusiasmo';
import Intensidade from './pages/lipsticks/intensidade';
import TutorialBocaPeq from './pages/tutorial/bocapeq';
import TutorialBorra from './pages/tutorial/borrafacil';
import TutorialCorIntensa from './pages/tutorial/corintensa';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path ='/' component={Home} exact />
        <Route path ='/energia' component={Energia} exact />
        <Route path ='/entusiasmo' component={Entusiasmo} exact />
        <Route path ='/intensidade' component={Intensidade} exact />
        <Route path ='/tutorial1' component={TutorialBorra} exact />
        <Route path ='/turorial2' component={TutorialBocaPeq} exact />
        <Route path ='/tutorial3' component={TutorialCorIntensa} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
