import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';





function NavbarComp() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link><CartWidget/></Nav.Link> 
          </Nav>
          
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavbarComp;
