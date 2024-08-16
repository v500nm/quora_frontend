import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { HashRouter as Switch, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Login from "./screens/user_login_auth/login";
import Home from "./screens/QuoraMain/Home";

function App() {
  return (
    <div className="App">
      <div className="auth-inner">
        <Switch>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </Switch>
      </div>
    </div>
  );
}

export default App;
