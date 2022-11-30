import React, { useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';

function App() {
  useEffect(() => {
    // const API = async () => {
    //   const datalist = await productApi.getAll();
    //   console.log('🚀 ~ datalist', datalist);
    // };
    // API();
  });

  return (
    <div className="App">
      Header
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todo
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active">
          Album
        </NavLink>
      </p>
      <Switch>
        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
