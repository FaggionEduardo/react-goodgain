import React from "react";
import { isAuthenticated } from "./auth";
import Land from './pages/Land';
import LandEn from './pages/LandEn';
import Terms from './pages/Terms';
import Policy from './pages/Policy';
import Forgot from "./pages/Forgot";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Credit from "./pages/Credit";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);
const NoPrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Redirect to={{ pathname: "/dashboard", state: { from: props.location } }} />
      ) : (
        
        <Component {...props} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Land} />
      <Route exact path="/en" component={LandEn} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/policy" component={Policy} />
      <NoPrivateRoute exact path="/login" component={Login} />
      <NoPrivateRoute exact path="/forgot" component={Forgot} />
      <NoPrivateRoute exact path="/register" component={Register} />
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <PrivateRoute exact path="/credit" component={Credit}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
