import React from "react"
import {Card, CardImg} from "react-bootstrap"

const GuitarCard = (props) => {
  return (
 <Card style={{ width: '10rem'}} className="box">
   <CardImg src={props.guitar.mainImage}></CardImg>
   <Card.Title>{props.guitar.name}</Card.Title>
   <Card.Body>Guitar Description</Card.Body>
 </Card>
  )
}

export default GuitarCard