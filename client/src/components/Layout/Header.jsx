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
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <Link to="/">Mr. Mamu's Blog</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu d-flex justify-content-between gap-4">
            <Link to="/" className="text-white" href="#home">
              Home
            </Link>
            <Link to="/service" className="text-white" href="#service">
              Service
            </Link>
            <Link to="/blog" className="text-white" href="#services">
              Blog
            </Link>
            <Link to="/about" className="text-white">
              About Us
            </Link>
            <Link to="/contact" className="text-white">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
