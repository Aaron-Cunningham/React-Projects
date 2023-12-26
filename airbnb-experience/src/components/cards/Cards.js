import React from 'react'
import AddCard from './AddCard';
import { holidayData } from "./CardsData";

export default function Cards() {
  const cards = holidayData.map(data => (
    <AddCard 
    key = {data.id}
    {...data}
    />
  ));
  return (
  <section className='card--container'>
    {cards}
  </section>
  )
}

