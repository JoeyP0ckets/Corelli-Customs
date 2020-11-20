import React from 'react'
import ReactPlayer from 'react-player'
import {Col, Row} from 'react-bootstrap'

const GuitarDetailsContainer = (props) => {
  return (
    <div className="details-container">
      <Col>
        {props.selectedGuitar.url ? <ReactPlayer url={props.selectedGuitar.url}/> : <img src={props.selectedGuitar.mainImage}/>}
      </Col>
      <Col><h1>Description: {props.selectedGuitar.description}</h1></Col>
    </div>
  )
}

export default GuitarDetailsContainer