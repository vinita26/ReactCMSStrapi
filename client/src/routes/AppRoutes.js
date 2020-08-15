import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import App from "../App";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";
import Checkout from "../components/checkout/Checkout";

const AppRoutes = () => {
  return (
    <Router>
      <>
      <NavBar />
      <Switch>
        <Route component={App} exact path="/" />
        <Route component={Signin} path="/signin" />
        <Route component={Signup} path="/signup" />
        <Route component={Checkout} path="/checkout" />
      </Switch>
      </>
    </Router>
  );
};

export default AppRoutes;
