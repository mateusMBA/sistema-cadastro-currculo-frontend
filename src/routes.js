import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cadastrado from './pages/Cadastrado';

function Routes(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cadastrado' exact component={Cadastrado} />
        </Switch>
      </BrowserRouter>
    )
}

export default Routes