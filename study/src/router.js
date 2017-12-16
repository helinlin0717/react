import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import BasicLayout from './layout/BasicLayout';
import Out from './layout/out';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/a" component={IndexPage} />
        <Route path="/" component={BasicLayout} />
        <Route path="/b" component={Out} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
