// import React from "react";
// import { Link } from "react-router-dom";
// import "./layout.scss";

// const Header = () => {
//   return (
//     <>
//       <div className="header">
//         <div className="container">
//           <div className="row d-flex align-content-center py-3">
//             <div className="col-md-2 cl-sm-12">
//               <div className="logo">
//                 <h4 className="text-center">Mahmud's Blog</h4>
//               </div>
//             </div>
//             <div className="col-md-8">
//               <div className="menu d-flex justify-content-center gap-5">
//                 <Link href="#home">Home</Link>
//                 <Link href="#about">About</Link>
//                 <Link href="#services">Services</Link>
//                 <Link href="#contact">Contact</Link>
//               </div>
//             </div>
//             <div className="col-md-2 col-sm-12 text-center">
//               <button className="btn btn-info">Contact Me</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./layout.scss";

const Header = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mr. Mamu's Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu">
            <Nav.Link className="text-white" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#service">
              Service
            </Nav.Link>
            <Nav.Link className="text-white" href="#services">
              Blog
            </Nav.Link>
            <Nav.Link className="text-white" href="#contact">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
