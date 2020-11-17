import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Row} from "react-bootstrap"
import GuitarContainer from '../GuitarContainer'
import Bio from '../Bio'
import Workshop from './Workshop'
import Demos from './Demos'



const GuitarNavbar = () => {
  
  return(
    <div className="navbar-container">
        
        <Router>
          
          
          <Row className="navbar-row">
          <h1 className="bio-text">Corelli Customs</h1>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/GuitarsForSale">Guitars For Sale</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/GuitarArchives">Guitar Archives</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/Demos">Demos</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/Workshop">Workshop</Link>&nbsp;&nbsp;&nbsp;
          </Row>
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
            <Route exact path="/Demos">
             <Demos/>
            </Route>
            <Route exact path="/Workshop">
             <Workshop/>
            </Route>
          </Switch>
          
        </Router> 
    </div>
  )
}



export default GuitarNavbar