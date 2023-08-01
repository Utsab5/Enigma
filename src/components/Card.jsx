import React from 'react'


function Card (props) {
  return (
    <div className='card'>
        <img src={props.img} alt="card img" />
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
        <h5>Client - {props.client}</h5>
    </div>
  )
}

export default Card;
