import React, { Component } from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import StyledComponents from "./Pages/StyledComponents";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import PrivateRoute from "./Routes/PrivateRoute";
import Dashboard from "./Pages/dashboard";
import ScrumComponent from "./Components/ScrumComponent";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/styled" element={<StyledComponents />} />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/scrum"
            element={
              <PrivateRoute>
                <ScrumComponent />
              </PrivateRoute>
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
