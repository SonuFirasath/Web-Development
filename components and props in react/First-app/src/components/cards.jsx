import React from 'react'
import './cards.css'
const cards = (props) => {
  return (
    <div className='card'>
      <h1>{props.title}</h1>
      <p>{props.discription}</p>
    </div>
  )
}

export default cards
