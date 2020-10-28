import React from "react"
import {Card, CardImg} from "react-bootstrap"

const GuitarCard = (props) => {
  return (
 <Card>
   <CardImg src={props.guitar.mainImage}></CardImg>
   <Card.Title>{props.guitar.name}</Card.Title>
   <Card.Body>Guitar Description</Card.Body>
 </Card>
  )
}

export default GuitarCard