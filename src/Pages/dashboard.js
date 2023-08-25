import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrumComponent from "../Components/ScrumComponent";
import {
  faHome,
  faUsers,
  faChevronLeft,
  faChevronRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../Components/style.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      toggled: false,
    };
  }
  handleLogout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("USERNAME");
  };
  handleCollapsedChange = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  handleToggleSidebar = (value) => {
    this.setState({ toggled: value });
    console.log(value);
  };

  render() {
    const username = localStorage.getItem("USERNAME");

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
          {/* Sidebar component */}
          {/* sidebar */}
          <ProSidebar
            className={`app ${this.state.toggled ? "toggled" : ""}`}
            style={{
              height: "90%",
              position: "absolute",
              marginTop: "5px",
            }}
            collapsed={this.state.collapsed}
            toggled={this.state.toggled}
            onToggle={this.handleToggleSidebar}>
            <Menu iconShape="square">
              {this.state.collapsed ? (
                <MenuItem
                  icon={<FontAwesomeIcon icon={faChevronRight} />}
                  onClick={this.handleCollapsedChange}
                />
              ) : (
                <MenuItem
                  suffix={<FontAwesomeIcon icon={faChevronLeft} />}
                  onClick={this.handleCollapsedChange}>
                  <div
                    style={{
                      padding: "9px",
                      fontWeight: "bold",
                      fontSize: 20,
                      letterSpacing: "1px",
                    }}>
                    <span className="text-success fw-bolder  text-uppercase ">
                      {username}
                      <FontAwesomeIcon icon={faUser} className="mx-2" />
                    </span>
                  </div>
                </MenuItem>
              )}
              <hr />
              <MenuItem
                icon={<FontAwesomeIcon icon={faHome} />}
                className="text-white fs-5 mt-3 ">
                Dashboard
              </MenuItem>
              <Link to={"/dashboard/scrum"}>
               
                <MenuItem
                  icon={<FontAwesomeIcon icon={faUsers} />}
                  className="text-white fs-5 mt-3">
                  SCRUM
                </MenuItem>
              </Link>
            </Menu>
          </ProSidebar>
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
            
            </div>
        </Container>
      </>
    );
  }
}
