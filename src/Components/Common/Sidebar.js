import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faChevronLeft,
  faChevronRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../style.css";

class Sidebars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      toggled: false,
    };
  }

  handleCollapsedChange = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  handleToggleSidebar = (value) => {
    this.setState({ toggled: value });
  };

  render() {
    const username = localStorage.getItem("USERNAME");

    return (
      <div>
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
            <MenuItem
              icon={<FontAwesomeIcon icon={faUsers} />}
              className="text-white fs-5 mt-3">
              Scrum
            </MenuItem>
          </Menu>
        </ProSidebar>
      </div>
    );
  }
}

export default Sidebars;
