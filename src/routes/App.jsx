import React from "react";
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import Layaout from "../containers/Layaout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.scss";

const App = () => {
  return (
    <Routes>
      <Layaout>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route component={NotFound} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layaout>
    </Routes>
  );
};

export default App;
