import React from "react";
import { Col, Row } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../Components/Sidebar/SideBar.js";
import LogoutNav from "../Components/NavBar/LogoutNav";

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false, // Initialize the collapsed state
    };
  }
  updateSidebarCollapsed = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const isAuthenticated = localStorage.getItem("AUTH_TOKEN") !== null;

    return isAuthenticated ? (
      <>
        <Row>
          <Col md={12}>
            <LogoutNav />
          </Col>
        </Row>
        <Row>
          <Col md={this.state.collapsed ? 1 : 2}>
            <SideBar updateCollapsed={this.updateSidebarCollapsed} />{" "}
          </Col>
          <Col md={this.state.collapsed ? 11 : 10} className="p-5">
            <Outlet />
          </Col>
        </Row>
      </>
    ) : (
      <Navigate to="/login" replace />
    );
  }
}

export default PrivateRoute;
