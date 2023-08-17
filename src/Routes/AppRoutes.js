import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ParentHOC from "../Pages/ParentHOC";
import SignUp from "../Pages/SignUp";
import StyledComponents from "../Pages/StyledComponents";
import HomePage from "../Pages/HomePage";

export default class AppRoutes extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/HOC" element={<ParentHOC />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/styled" element={<StyledComponents />}></Route>
        </Routes>
      </>
    );
  }
}
