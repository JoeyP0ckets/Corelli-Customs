import React from "react"
import GuitarCard from "./GuitarCard"
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
    <div>
      Current Guitars
      {renderGuitarCards()}
    </div>
  )
}

export default GuitarContainer