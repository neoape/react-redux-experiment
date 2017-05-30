import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import App from './containers/App';
import store from './store/index'
import {setPlayers, addPlayers} from './actions/playersActions'

// We require the routes and render to the DOM using ReactDOM API
ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))

var players = [
    { number: 1, name: "Ben Blocker", position: "G" },
    { number: 2, name: "Dave Defender", position: "D" },
    { number: 3, name: "Sam Sweeper", position: "D" },
    { number: 4, name: "Matt Midfielder", position: "M" },
    { number: 5, name: "William Winger", position: "M" },
    { number: 6, name: "Fillipe Forward", position: "F" }
  ]

store.dispatch(setPlayers(players))

window.store = store
console.log('store', store.getState())
store.dispatch(addPlayers({ number: 13, name: "test", position: "q" }))
console.log('store', store.getState())