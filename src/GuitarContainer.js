import React from "react"
import GuitarCard from "./GuitarCard"
import * as GuitarFunctions from './DataGrabber'

const GuitarContainer = () => {

  const renderGuitarCards = () => {
   return GuitarFunctions.getAllGuitars
  }

  return (
    <div>
      Current Guitars
      {renderGuitarCards()}
    </div>
  )
}

export default GuitarContainer