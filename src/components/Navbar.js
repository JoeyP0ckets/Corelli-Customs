import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GuitarContainer from '../GuitarContainer'
import Bio from '../Bio'



const MutantNavbar = () => {
  
  return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">CORELLI CUSTOMS</Navbar.Brand>
    <Nav className="mr-auto">
      <Router>
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/GuitarsForSale">Guitars For Sale</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/GuitarArchives">Guitar Archives</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/Demos">Demos</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/Workshop">Workshop</Link>&nbsp;&nbsp;&nbsp;
      <Switch>
          <Route exact path="/">
             <Bio/>
          </Route>
          <Route exact path="/GuitarArchives">
             <GuitarContainer/>
          </Route>
          <Route exact path="/">
             <GuitarContainer/>
          </Route>
        </Switch>
      </Router>
    </Nav>
    </Navbar>
  )
}



export default MutantNavbar