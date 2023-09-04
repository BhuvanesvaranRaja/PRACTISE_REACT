import React, { Component } from "react";
import NavBar from "./Components/NavBar/NavBar";
import AppRoutes from "./Routes/AppRoutes";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <AppRoutes /> 
      </>
    );
  }
}

export default App;
