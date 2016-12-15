import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import Home from './components/Home';
import Next from './components/Next';

export default (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/next" component={Next} />
        </Route>
      </Router>
    );
