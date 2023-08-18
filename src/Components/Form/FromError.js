import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default class FromError extends Component {
  render() {
    return (
      <div style={{ color: "red", marginTop: "2px", marginRight: "2px" }}>
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          style={{ marginRight: "5px", fontSize: "13px" }}
        />
        {this.props.children}{" "}
      </div>
    );
  }
}
