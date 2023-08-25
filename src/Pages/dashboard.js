import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebars from "../Components/Common/Sidebar";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Dashboard extends Component {
  handleLogout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("USERNAME");
  };

  render() {
    return (
      <>
        <Container fluid>
          {/* Navbar */}
          <div className="d-flex justify-content-between mt-3 p-3 text-dark bg-dark-subtle">
            <h6 className="mt-2 fs-4 fw-bolder">DASHBOARD</h6>
            <Link to="/login">
              <Button style={{ float: "right" }} onClick={this.handleLogout}>
                LOG OUT
                <FontAwesomeIcon icon={faSignOutAlt} className="mx-2" />
              </Button>
            </Link>
          </div>

          <Sidebars />

          {/* Main Content */}
          <div
            style={{
              marginLeft: "300px",
              padding: "20px",
              fontWeight: "bold",
              fontSize: "30px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              color: "orange",
            }}>
            This is the dashboard page
          </div>
        </Container>
      </>
    );
  }
}
