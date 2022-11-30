import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  return (
    <div>
      <Switch>
        <Route path="/todos" component={ListPage} exact />
        <Route path="/todos/:todoId" component={DetailPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
