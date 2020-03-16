import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import Navigation from './pages/components/Navigation';
import Home from './pages/Home';
import About from './pages/About';

function theme(state, action) {
  state = {
    fontPrimary: 'Quantico',

    primary: '#ff8c00',
    secondary: '#A1BDFF',
    pink: "#F78AFA",

    lightGray: '#252525',
    offWhite: '#F2F2F2',
    
    darkGray: "#131313"
  }

  return state;
}


function general(state, action) {
  state = {
    baseURL: "http://localhost:3000"
  }

  return state;
}

const rootReducer = combineReducers({
  theme,
  general
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Navigation />
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about/" component={About} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root')
)