// import React, { Component } from "react";
// import style from "../../Assets/CSS/NavBar.module.css";
// import { Link } from "react-router-dom";
// export default class NavBar extends Component {
//   render() {
//     return (
//       <div className={style.head}>
//         <Link to={"/"}>HOME</Link>
//         <Link to={"/styled"}>STYLED</Link>
//         <Link to={"/Signup"}>SIGN UP</Link>
//       </div>
//     );
//   }
// }
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faSignInAlt,
//   faUserPlus,
// } from "@fortawesome/free-solid-svg-icons";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
// import { Button } from "react-bootstrap";

// export default class NavBar extends Component {
//   render() {
//     return (
//       <Navbar className="bg-primary py-3" expand="lg">
//         <Navbar.Brand
//           as={Link}
//           to="/"
//           style={{ fontSize: "30px", color: "#dc3545", marginLeft: "50px" }}>
//           <FontAwesomeIcon icon={faHome} className="mr-2" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link
//               as={Link}
//               to="/Signup"
//               className="text-light fs-5 fw-bold">
//               <Button className="bg-danger">
//                 <FontAwesomeIcon icon={faUserPlus} className="me-2" />
//                 SIGN UP
//               </Button>
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/login"
//               className="text-light mx-3 fs-5 fw-bold">
//               <Button className="bg-danger">
//                 <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
//                 LOG IN
//               </Button>
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     );
//   }
// }

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignInAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "react-bootstrap";

export default function DefaultNavbar() {
  const location = useLocation();

  // Check if the current path is "/dashboard"
  const isDashboardPath = location.pathname === "/dashboard";

  if (isDashboardPath) {
    return null; // Return null to remove the navbar for the /dashboard path
  }
  return (
    <Navbar className="bg-primary py-3" expand="lg">
      <Navbar.Brand
        as={Link}
        to="/"
        style={{ fontSize: "30px", color: "white", marginLeft: "50px" }}>
        <FontAwesomeIcon icon={faHome} className="mr-2" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/Signup" className="text-light fs-5 fw-bold">
            <Button className="bg-danger">
              <FontAwesomeIcon icon={faUserPlus} className="me-2" />
              SIGN UP
            </Button>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/login"
            className="text-light mx-3 fs-5 fw-bold">
            <Button className="bg-danger">
              <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
              LOG IN
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
