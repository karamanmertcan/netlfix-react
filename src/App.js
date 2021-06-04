import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Browse from './pages/Browse';
import MovieState from './context/MovieState';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <MovieState>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/browse">
                <Browse />
              </Route>
            </Switch>
          </Fragment>
        </Router>
      </MovieState>
    </AuthProvider>
  );
};

export default App;
