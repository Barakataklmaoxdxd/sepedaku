import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";


function Navigasi() {
  return (
    <Navbar collapseOnSelect expand="xxl" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>SEPEDAKU</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">HOME</Nav.Link>
            <NavDropdown title="CATEGORY">
              <NavDropdown.Item href="gravel">GRAVEL</NavDropdown.Item>
              <NavDropdown.Item href="roadbike">ROADBIKE</NavDropdown.Item>
              <NavDropdown.Item href="mtb">MTB</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="pojokFixie">POJOK FIXIE</Nav.Link>
            <Nav.Link href="about">ABOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default Navigasi;
