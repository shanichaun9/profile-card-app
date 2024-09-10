import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div className='card' style={{overflow: 'hidden'}}>
      <img src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=" alt="" 
        width={333}
      />
      <h1>{props?.title}</h1>
      <p>{props?.description}</p>
    </div>
  )
}

export default Card
