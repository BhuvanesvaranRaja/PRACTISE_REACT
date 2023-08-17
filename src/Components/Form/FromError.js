import React, { Component } from "react";

class FromError extends Component {
  render() {
    return (
      <div>
        <span style={{ color: "red", textAlign: "center" }}>
          {this.props.children} !!
        </span>
      </div>
    );
  }
}

export default FromError;
