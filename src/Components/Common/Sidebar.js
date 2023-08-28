import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
// import React, { Component } from "react";
// import { Button, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ScrumComponent from "../Components/ScrumComponent";
// import { Routes, Route } from "react-router-dom";
// import {
//   faHome,
//   faUsers,
//   faChevronLeft,
//   faChevronRight,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
// import "../Components/style.css";
// import HomePage from "./HomePage";

// export default class Dashboard extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collapsed: false,
//       toggled: false,
//       selectedComponent: null,
//     };
//   }
//   handleLogout = () => {
//     localStorage.removeItem("AUTH_TOKEN");
//     localStorage.removeItem("USERNAME");
//   };
//   handleCollapsedChange = () => {
//     this.setState({ collapsed: !this.state.collapsed });
//   };

//   handleToggleSidebar = (value) => {
//     this.setState({ toggled: value });
//     console.log(value);
//   };

//   render() {
//     const username = localStorage.getItem("USERNAME");

//     return (
//       <>
//         <Container fluid>
//           {/* Navbar */}
//           <div className="d-flex justify-content-between mt-3 p-3 text-dark bg-dark-subtle">
//             <h6 className="mt-2 fs-4 fw-bolder">DASHBOARD</h6>
//             <Link to="/login">
//               <Button style={{ float: "right" }} onClick={this.handleLogout}>
//                 LOG OUT
//                 <FontAwesomeIcon icon={faSignOutAlt} className="mx-2" />
//               </Button>
//             </Link>
//           </div>
//           {/* Sidebar component */}
//           {/* sidebar */}
//           <ProSidebar
//             className={`app ${this.state.toggled ? "toggled" : ""}`}
//             style={{
//               height: "90%",
//               position: "absolute",
//               marginTop: "5px",
//             }}
//             collapsed={this.state.collapsed}
//             toggled={this.state.toggled}
//             onToggle={this.handleToggleSidebar}>
//             <Menu iconShape="square">
//               {this.state.collapsed ? (
//                 <MenuItem
//                   icon={<FontAwesomeIcon icon={faChevronRight} />}
//                   onClick={this.handleCollapsedChange}
//                 />
//               ) : (
//                 <MenuItem
//                   suffix={<FontAwesomeIcon icon={faChevronLeft} />}
//                   onClick={this.handleCollapsedChange}>
//                   <div
//                     style={{
//                       padding: "9px",
//                       fontWeight: "bold",
//                       fontSize: 20,
//                       letterSpacing: "1px",
//                     }}>
//                     <span className="text-success fw-bolder  text-uppercase ">
//                       {username}
//                       <FontAwesomeIcon icon={faUser} className="mx-2" />
//                     </span>
//                   </div>
//                 </MenuItem>
//               )}
//               <hr />
//               <MenuItem
//                 icon={<FontAwesomeIcon icon={faHome} />}
//                 className="text-white fs-5 mt-3 ">
//                 <Link to={"/dashboard"}>Dashboard</Link>
//               </MenuItem>

//               <MenuItem
//                 icon={<FontAwesomeIcon icon={faUsers} />}
//                 className="text-white fs-5 mt-3">
//                 <Link to={"/scrum"}>SCRUM</Link>
//               </MenuItem>
//               <MenuItem
//                 icon={<FontAwesomeIcon icon={faUsers} />}
//                 className="text-white fs-5 mt-3">
//                 <Link to={"/scru"}>fdf</Link>
//               </MenuItem>
//             </Menu>
//           </ProSidebar>
//           {/* Main Content */}
//           <div
//             style={{
//               marginLeft: "300px",
//               padding: "20px",
//               fontWeight: "bold",
//               fontSize: "30px",
//               fontFamily: "monospace",
//               textTransform: "uppercase",
//               color: "orange",
//             }}>
//             <ScrumComponent />
//           </div>
//         </Container>
//       </>
//     );
//   }
// }

// import React, { Component } from "react";
// import { Button, Container } from "react-bootstrap";
// import {
//   faSignOutAlt,
//   faUsers,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ScrumComponent from "../Components/ScrumComponent";

// import { Link } from "react-router-dom";
// import HomePage from "./HomePage";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
// import "../Components/style.css";
// import Sidebar from "../Components/Common/Sidebar";

// export default class Dashboard extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collapsed: false,
//       toggled: false,
//       selectedComponent: "Dashboard",
//     };
//   }

//   handleComponentChange = (component) => {
//     this.setState({ selectedComponent: component });
//     window.history.pushState(null, null, `/${component.toLowerCase()}`);
//   };
//   handleLogout = () => {
//     localStorage.removeItem("AUTH_TOKEN");
//     localStorage.removeItem("USERNAME");
//   };
//   handleCollapsedChange = () => {
//     this.setState({ collapsed: !this.state.collapsed });
//   };
//   handleToggleSidebar = (value) => {
//     this.setState({ toggled: value });
//     console.log(value);
//   };

//   render() {
//     const username = localStorage.getItem("USERNAME");
//     const { selectedComponent } = this.state;

//     return (
//       <>
//         <Container fluid>
//           {/* Navbar */}
//           <div className="d-flex justify-content-between mt-3 p-3 text-dark bg-dark-subtle">
//             <h6 className="mt-2 fs-4 fw-bolder">DASHBOARD</h6>
//             <Link to="/login">
//               <Button style={{ float: "right" }} onClick={this.handleLogout}>
//                 LOG OUT
//                 <FontAwesomeIcon icon={faSignOutAlt} className="mx-2" />
//               </Button>
//             </Link>
//           </div>

//           {/* Sidebar component */}
//           <ProSidebar
//             className={`app ${this.state.toggled ? "toggled" : ""}`}
//             style={{
//               height: "90%",
//               position: "absolute",
//               marginTop: "5px",
//             }}
//             collapsed={this.state.collapsed}
//             toggled={this.state.toggled}
//             onToggle={this.handleToggleSidebar}>
//             <Menu iconShape="square">
//               {this.state.collapsed ? (
//                 <MenuItem
//                   icon={<FontAwesomeIcon icon={faChevronRight} />}
//                   onClick={this.handleCollapsedChange}
//                 />
//               ) : (
//                 <MenuItem onClick={this.handleCollapsedChange}>
//                   <div
//                     style={{
//                       padding: "9px",
//                       fontWeight: "bold",
//                       fontSize: 20,
//                       letterSpacing: "1px",
//                     }}>
//                     <span className="text-success fw-bolder  text-uppercase ">
//                       {username}
//                     </span>
//                   </div>
//                 </MenuItem>
//               )}
//               <MenuItem
//                 className="text-white fs-5 mt-3"
//                 onClick={() => this.handleComponentChange("Dashboard")}>
//                 Dashboard
//               </MenuItem>
//               <MenuItem
//                 icon={<FontAwesomeIcon icon={faUsers} />}
//                 className="text-white fs-5 mt-3"
//                 onClick={() => this.handleComponentChange("Scrum")}>
//                 Scrum
//               </MenuItem>
//             </Menu>
//           </ProSidebar>

//           {/* Main Content */}
//           <div
//             style={{
//               marginLeft: "300px",
//               padding: "20px",
//               fontWeight: "bold",
//               fontSize: "30px",
//               fontFamily: "monospace",
//               textTransform: "uppercase",
//               color: "orange",
//             }}>
//             {selectedComponent === "Scrum" && <ScrumComponent />}
//           </div>
//         </Container>
//       </>
//     );
//   }
// }
