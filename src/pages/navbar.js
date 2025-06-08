import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <Navbar style={{ backgroundColor: "#A0C878" }}>
      <Container>
        <Navbar.Brand style={{ fontFamily: "arial black" }} href="">
          BikeRep
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          <NavDropdown title="Services" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to="/bookappointment">
              In-store repair
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/roadsiderepair">
              Roadside repair
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default navbar;
