import React from 'react'
import ReactPlayer from 'react-player'
import {Col, Row} from 'react-bootstrap'

const GuitarDetailsContainer = (props) => {
  return (
    <div className="details-container">
      <Col>
        <ReactPlayer url={props.selectedGuitar.url} alt={props.selectedGuitar.mainImage}/>
      </Col>
      <Col><h1>Description: {props.selectedGuitar.description}</h1></Col>
    </div>
  )
}

export default GuitarDetailsContainer