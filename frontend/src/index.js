import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './style.scss';
import Home from 'pages/Home';
import Landing from 'pages/Landing';
import './i18n';
import LanguageSelector from './components/LanguageSelector';

ReactDOM.render(
  <>
    <LanguageSelector />
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
);
