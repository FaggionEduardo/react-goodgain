import React from "react";
import { isAuthenticated } from "./auth";
import Land from './pages/Land';
import Terms from './pages/Terms';
import Policy from './pages/Policy';
import Forgot from "./pages/Forgot";
import Login from "./pages/Login";
import Register from "./pages/Register";
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

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Land} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/policy" component={Policy} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/forgot" component={Forgot} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute path="/dashboard" component={Dashboard}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
