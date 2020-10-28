import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'


const MutantNavbar = () => {
  
  return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">CORELLI CUSTOMS</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Guitars For Sale</Nav.Link>
      <Nav.Link href="#features">Archives</Nav.Link>
      <Nav.Link href="#pricing">Demos</Nav.Link>
      <Nav.Link href="#demos">In the Workshop</Nav.Link>
    </Nav>
    </Navbar>
  )
}



export default MutantNavbar