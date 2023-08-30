import React, { Component } from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import PrivateRoute from "./Routes/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import ScrumComponent from "./Components/ScrumComponents/ScrumComponent";

class App extends Component {
  constructor(props) {
    super(props);
    const isLoggedIn = localStorage.getItem("AUTH_TOKEN") !== null;
    this.state = {
      isLoggedIn: isLoggedIn,
    };
  }
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          {this.state.isLoggedIn ? (
            <Route path="/signup" element={<Navigate to="/dashboard" />} />
          ) : (
            <Route path="/signup" element={<SignUp />} />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scrum" element={<ScrumComponent />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
