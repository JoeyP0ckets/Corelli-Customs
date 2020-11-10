import React from "react"
import GuitarCard from "./GuitarCard"
import {Container} from 'react-bootstrap'
import * as GuitarFunctions from './DataGrabber'
import GuitarDetailsContainer from '../src/components/GuitarDetailsContainer'

let guitars = GuitarFunctions.getAllGuitars()

class GuitarContainer extends React.Component {

  state = {
    guitars: [],
    selectedGuitar: null
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
      handleDetailsClick={this.handleDetailsClick}
    />
   )
  }

  handleDetailsClick = (guitar) => {
    this.setState({
      selectedGuitar: guitar
    })
  }
  
  render() {
    console.log(this.state)
    return (
      <Container className="guitar-container">
      {this.renderGuitarCards()}
      {this.state.selectedGuitar ? <GuitarDetailsContainer selectedGuitar={this.state.selectedGuitar}/> : null}
      </Container>
    )
  }
}

export default GuitarContainer