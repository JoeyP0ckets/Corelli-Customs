import React from "react"
import GuitarCard from "./GuitarCard"
import {Container} from 'react-bootstrap'
import * as GuitarFunctions from './DataGrabber'

const GuitarContainer = () => {

  const renderGuitarCards = () => {
   let guitars = GuitarFunctions.getAllGuitars()
   return guitars.map(guitar => 
    <GuitarCard
      guitar={guitar}
    />
    )
  }

  return (
    <Container>
      Current Guitars
      {renderGuitarCards()}
    </Container>
  )
}

export default GuitarContainer