import React from 'react';
import './App.css';

import Routes from './Route';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

const browserHistory = createBrowserHistory();
function App() {
  return (
    <Router history={browserHistory}>
      <Routes />
    </Router>
  );
}

export default App;
