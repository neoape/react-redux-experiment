import React from 'react';
import { Switch, Route } from 'react-router';
import FullList from '../components/FullList';
import PlayerContainer from '../containers/PlayerContainer';

const List = () => (
  <list>
    <Switch>
      <Route exact path='/list' component={FullList}/>
      <Route path='/list/:number' component={PlayerContainer}/>
    </Switch>
  </list>
);

export default List;