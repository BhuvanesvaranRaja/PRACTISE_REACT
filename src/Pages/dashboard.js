// import React, { Component } from "react";
// import { Button, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export default class dashboard extends Component {
//   handleLogout = () => {
//     localStorage.removeItem("AUTH_TOKEN");
//     localStorage.removeItem("USERNAME");
//   };
//   render() {
//     return (
//       <>
//         <Container>
//           {/* navbar */}
//           <div className="d-flex justify-content-between mt-5">
//             <h6 className="mt-2 fs-4">DASHBOARD</h6>
//             <Link to={"/login"}>
//               <Button style={{ float: "right" }} onClick={this.handleLogout}>
//                 LOGOUT
//               </Button>
//             </Link>
//           </div>
//         </Container>
//       </>
//     );
//   }
// }
import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <div className="d-flex justify-content-between mt-3">
            <h6 className="mt-2 fs-4">DASHBOARD</h6>
            <Link to="/login">
              <Button style={{ float: "right" }} onClick={this.handleLogout}>
                LOGOUT
              </Button>
            </Link>
          </div>

          {/* Sidebar */}
          <div
            className="bg-light sidebar"
            style={{
              width: "250px",
              height: "100vh",
              backgroundColor: "red",
            }}>
            {/* Add your sidebar content here */}
            <ul className="list-unstyled bg-danger h-100 mt-3 ">
              <li>Profile</li>
              <li>Settings</li>
              {/* Add more sidebar items as needed */}
            </ul>
          </div>

          {/* Main Content */}
          <div style={{ marginLeft: "250px", padding: "20px" }}>
            {/* Your main content goes here */}
          </div>
        </Container>
      </>
    );
  }
}
