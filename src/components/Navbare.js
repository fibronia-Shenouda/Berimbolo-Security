import "../App.css";
import "../styles/nav.css";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar, Nav } from "react-bootstrap";


export const Navbare = () => {
  return (
    <Navbar className="nav" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className="brand">
        Berimbolo <span style={{ color: "#38D9BA" }}>Security</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link className="nav-link" to="#home" smooth>
              home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="#services" smooth>
              Services
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="#products" smooth>
              Products
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="#generalHelp" smooth>
              General Help
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="#contact" smooth>
              Contact Us
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
