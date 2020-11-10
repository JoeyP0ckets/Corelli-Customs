import React from "react"
import {Card, CardImg} from "react-bootstrap"

const GuitarCard = (props) => {
// console.log(props)
  // const showDetails = (guitar) => {
  //   console.log(`${guitar.name} was clicked`)
  // }
  return (
 <Card onClick={()=>props.handleDetailsClick(props.guitar)} style={{ width: '10rem'}} className="box">
   <CardImg src={props.guitar.mainImage}></CardImg>
   <Card.Title>{props.guitar.name}</Card.Title>
   {/* <Card.Body>{props.guitar.type}</Card.Body> */}
 </Card>
  )
}

export default GuitarCard