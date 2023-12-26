import React from 'react'
import { IoLocation } from "react-icons/io5";

export default function TravelCard(props) {
  return (
    <div className='card'>
        <img className='image--travel' src={props.img} alt={props.location}/>
        <div className='card--content'>
            <span><IoLocation color='#ff4500'/>{props.country} </span>
            <span><a href={props.googleMaps}>View on Google Maps</a></span>
            <h1>{props.location}</h1>
            <p><strong>{props.dates}</strong></p>
            <p>{props.description}</p>


        </div>
    </div>
    
  )
}
