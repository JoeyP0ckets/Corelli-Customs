import React from 'react'

const GuitarDetailsContainer = (props) => {
  console.log(props)
  return (
    <div className="details-container">
      <h1>Description: {props.selectedGuitar.description}</h1>
    </div>
  )
}

export default GuitarDetailsContainer