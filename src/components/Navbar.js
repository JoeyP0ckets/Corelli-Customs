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



const GuitarNavbar = () => {
  
  return(
    <div className="navbar-container">
        <h1>Corelli Customs</h1>
        <Router>
          <div>
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
            <Route exact path="/GuitarsForSale">
             <GuitarContainer/>
            </Route>
          </Switch>
          </div>
        </Router> 
    </div>
  )
}



export default GuitarNavbar