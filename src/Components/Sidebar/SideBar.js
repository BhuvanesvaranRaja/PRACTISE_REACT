import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChevronLeft,
  faChevronRight,
  faHome,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import ".././Sidebar/style.css";

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      toggled: false,
      activeMenuItem: "dashboard",
    };
  }

  handleToggleSidebar = () => {
    const { collapsed } = this.state;
    const newCollapsed = !collapsed;
    this.setState({
      toggled: newCollapsed,
      collapsed: newCollapsed,
    });
    // Notify the parent component (PrivateRoute) of the new collapsed state
    this.props.updateCollapsed(newCollapsed);
  };

  handleMenuItemClick = (menuKey) => {
    this.setState({ activeMenuItem: menuKey });
  };

  render() {
    const username = localStorage.getItem("USERNAME");
    const { activeMenuItem } = this.state;

    return (
      <>
        <Container fluid>
          <ProSidebar
            className={`app ${this.state.toggled ? "toggled" : ""}`}
            style={{
              height: "100%",
              position: "absolute",
              marginTop: "5px",
            }}
            collapsed={this.state.collapsed}
            onToggle={this.handleToggleSidebar}>
            <Menu iconShape="square">
              {this.state.collapsed ? (
                <MenuItem
                  icon={
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      onClick={this.handleToggleSidebar}
                    />
                  }
                />
              ) : (
                <MenuItem
                  suffix={<FontAwesomeIcon icon={faChevronLeft} />}
                  onClick={this.handleToggleSidebar}>
                  <div
                    style={{
                      padding: "9px",
                      fontWeight: "bold",
                      fontSize: 20,
                      letterSpacing: "px",
                    }}>
                    <span className="text-success fw-bolder  text-uppercase fs-4">
                      {username}
                      <FontAwesomeIcon icon={faUser} className="mx-4" />
                    </span>
                  </div>
                </MenuItem>
              )}
              <MenuItem
                icon={<FontAwesomeIcon icon={faHome} />}
                className={` fs-4 mt-3 ${
                  activeMenuItem === "dashboard" ? "active-menu-item" : ""
                }`}>
                <Link
                  to={"/dashboard"}
                  className="text-white"
                  onClick={() => this.handleMenuItemClick("dashboard")}>
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem
                icon={<FontAwesomeIcon icon={faUser} />}
                className={` fs-4 mt-3  ${
                  activeMenuItem === "scrum" ? "active-menu-item" : ""
                }`}>
                <Link
                  to={"/scrum"}
                  className="text-white"
                  onClick={() => this.handleMenuItemClick("scrum")}>
                  Scrum
                </Link>
              </MenuItem>
              <MenuItem
                icon={<FontAwesomeIcon icon={faLeaf} />}
                className={` fs-4   mt-3 ${
                  activeMenuItem === "hooks" ? "active-menu-item" : ""
                }`}>
                <Link
                  to={"/hooks"}
                  className="text-white"
                  onClick={() => this.handleMenuItemClick("hooks")}>
                  Hooks
                </Link>
              </MenuItem>
            </Menu>
          </ProSidebar>
        </Container>
      </>
    );
  }
}

export default SideBar;
