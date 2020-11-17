import React from "react"
import {Card, CardImg} from "react-bootstrap"

const GuitarCard = (props) => {

  return (
 <Card onClick={()=>props.handleDetailsClick(props.guitar)} style={{ width: '10rem'}} className="box">
   <CardImg src={props.guitar.mainImage} alt={props.guitar.name}></CardImg>
   <Card.Title>{props.guitar.name}</Card.Title>
 </Card>
  )
}

export default GuitarCard