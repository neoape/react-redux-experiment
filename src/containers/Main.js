import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from '../components/HomePage';
import List from '../containers/List';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/list' component={List}/>
      {/*<Route path='/schedule' component={Schedule}/>*/}
    </Switch>
  </main>
);

export default Main;