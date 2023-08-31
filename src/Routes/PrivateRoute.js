import React from "react";
import { Col, Row } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../Components/Sidebar/SideBar";
import LogoutNav from "../Components/NavBar/LogoutNav";

class PrivateRoute extends React.Component {
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
          <Col md={2}>
            <SideBar />
          </Col>
          <Col md={10} className="p-5">
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
