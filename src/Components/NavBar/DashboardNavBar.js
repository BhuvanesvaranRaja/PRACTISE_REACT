// import React from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function DashboardNavBar() {
//   handleLogout = () => {
//     localStorage.removeItem("AUTH_TOKEN");
//     localStorage.removeItem("USERNAME");
//   };

//   return (
//     <Navbar className="bg-primary py-3" expand="lg">
//       <Navbar.Brand href="#">DashboardNavBar</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link>
//             <Link to={"/login"}>
//               <Button
//                 style={{ float: "right", margin: "20px" }}
//                 onClick={handleLogout}>
//                 LOGOUT
//               </Button>
//             </Link>
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default DashboardNavBar;

import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { FaHome } from "font-awesome";

class DashboardNavBar extends Component {
  handleLogout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("USERNAME");
  };

  render() {
    return (
      <Navbar className="bg-primary py-3" expand="lg">
        <Navbar.Brand href="#">
          {/* <FaHome style={{ marginRight: "5px" }} /> */}
          DashboardNavBar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to={"/login"}>
                <Button
                  style={{ float: "right", margin: "20px" }}
                  onClick={this.handleLogout}>
                  LOGOUT
                </Button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default DashboardNavBar;
