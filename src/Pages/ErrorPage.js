import React, { Component } from "react";

export default class ErrorPage extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            marginTop: "30vh",
            color: "red",
            fontWeight: "bolder",
          }}
        >
          404 Page not found
        </h1>
      </div>
    );
  }
}
