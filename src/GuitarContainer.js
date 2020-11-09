import React from "react"
import GuitarCard from "./GuitarCard"
import {Container} from 'react-bootstrap'
import * as GuitarFunctions from './DataGrabber'

let guitars = GuitarFunctions.getAllGuitars()

class GuitarContainer extends React.Component {

  state = {
    guitars: []
  }
  
  componentDidMount() {
    this.setState({
      guitars: guitars
    })
  }



  renderGuitarCards = () => {
   return guitars.map(guitar => 
    <GuitarCard
      guitar={guitar}
    />
    )
  }
  
  render() {
    return (
      <Container className="guitar-container">
      {this.renderGuitarCards()}
      </Container>
    )
  }
}

export default GuitarContainer