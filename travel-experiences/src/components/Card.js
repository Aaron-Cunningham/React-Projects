import React from 'react'
import { TravelData } from './TravelData'
import TravelCard from './travelCard'


export default function Card() {
    const locationData = TravelData.map(data =>(
        <TravelCard
        key = {data.id}
        {...data}/>
    ))
  return (
    <section className='card--container'>
        {locationData}
    </section>
    
  )
}
