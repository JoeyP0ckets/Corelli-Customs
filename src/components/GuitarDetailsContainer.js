import React from 'react'
import ReactPlayer from 'react-player'
import {Col, Row} from 'react-bootstrap'

const GuitarDetailsContainer = (props) => {
  return (
    <div className="details-container">
      <Row>
        <Col>
          {props.selectedGuitar.url ? <ReactPlayer url={props.selectedGuitar.url}/> : <img src={props.selectedGuitar.mainImage} alt={props.selectedGuitar.name}/>}
        </Col>
        <Col>
          <h1 className="light-text">Description: {props.selectedGuitar.description}</h1>
        </Col>
      </Row>
    </div>
  )
}

export default GuitarDetailsContainer