import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./src/containers/Home";
import Login from "./src/containers/Login";
import Signup from "./src/containers/Signup";
import UploadFile from "./src/components/UploadFile";
import NotFound from "./src/containers/NotFound";
import AppliedRoute from "./src/components/AppliedRoute";
import AuthenticatedRoute from "./src/components/AuthenticatedRoute";
import UnauthenticatedRoute from "./src/components/UnauthenticatedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute path="/uploadfile" exact component={UploadFile} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;