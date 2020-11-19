import React from 'react'
import ReactPlayer from 'react-player'
import {Col, Row} from 'react-bootstrap'

const GuitarDetailsContainer = (props) => {
  return (
    <div className="details-container">
      <Col>
        <ReactPlayer url="https://youtu.be/uEnGcLJXHH0"/>
      </Col>
      <Col><h1>Description: {props.selectedGuitar.description}</h1></Col>
    </div>
  )
}

export default GuitarDetailsContainer