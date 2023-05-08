import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" style={{margin: "2%"}}>
      <Container>
        <Navbar.Brand href="#home" style={{color: "black", fontSize: "25px"}}>Digi Designs</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#features" active>Home</Nav.Link>
            <Nav.Link href="#pricing" active>Our Services</Nav.Link>
            <Nav.Link href="#services" active>Our Projects</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets" active>Sign Up</Nav.Link>
           
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;