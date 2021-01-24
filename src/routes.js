import React from "react";
import { isAuthenticated } from "./auth";
import Land from './pages/Land';
import LandEn from './pages/LandEn';
import Terms from './pages/Terms';
import TermsEn from './pages/TermsEn';
import Policy from './pages/Policy';
import PolicyEn from './pages/PolicyEn';
import Forgot from "./pages/Forgot";
import Login from "./pages/Login";
import Loading from "./pages/Loading";
import LoadingEn from "./pages/LoadingEn";
import Register from "./pages/Register";
import Credit from "./pages/Credit";
import Withdraw from "./pages/Withdraw";
import Dashboard from "./pages/Dashboard";
import FAQ from "./pages/Faq";
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
      <Route exact path="/termsen" component={TermsEn} />
      <Route exact path="/policy" component={Policy} />
      <Route exact path="/policyen" component={PolicyEn} />
      <Route exact path="/loading" component={Loading} />
      <Route exact path="/loadingEn" component={LoadingEn} />
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/faqen" render={props =><Redirect to={{ pathname: "/en", state: { from: props.location }}} />} />
      <NoPrivateRoute exact path="/login" component={Login} />
      <NoPrivateRoute exact path="/forgot" component={Forgot} />
      <NoPrivateRoute exact path="/register" component={Register} />
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <PrivateRoute exact path="/credit" component={Credit}/>
      <PrivateRoute exact path="/withdraw" component={Withdraw}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
