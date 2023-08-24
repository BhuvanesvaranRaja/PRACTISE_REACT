import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <h1
          style={{
            textAlign: "center",
            marginTop: "30vh",
            color: "green",
            fontFamily: "serif",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}>
          This is the home page
        </h1>
      </>
    );
  }
}
