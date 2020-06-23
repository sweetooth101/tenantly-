import React from 'react'
import "../general.css"

const Card = props => (
    <div className="Card">
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>


)

export default Card