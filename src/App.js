import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Browse from './pages/Browse';
import MovieState from './context/MovieState';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  //changes
  return (
    <AuthProvider>
      <MovieState>
        <Router basename='/'>
          <Fragment>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route exact path='/signup'>
                <SignUp />
              </Route>
              <PrivateRoute exact path='/browse' component={Browse} />
            </Switch>
          </Fragment>
        </Router>
      </MovieState>
    </AuthProvider>
  );
};

export default App;
