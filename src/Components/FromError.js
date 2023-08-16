import React, { Component } from "react";
class FromError extends Component {
  render() {
    return (
      <div
        style={{
          color: "red",
          // display: "flex",
          // alignItems: "center",  
          textAlign: "left",
          margin: "20px",
        }}>
        {/* <span style={{ marginRight: "8px" }}>
            <i className="fa fa-exclamation-circle" aria-hidden="true" />
        </span> */}
        <span>{this.props.children} !!</span>
      </div>
    );
  }
}

export default FromError;
