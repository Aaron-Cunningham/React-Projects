import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className='hero-container'>
        <img className='hero-img' src='https://www.allianztravelinsurance.com/v_1597949924615/media/travel/rental-cars/renting-car-vs-driving-your-own-new.jpg' alt='man driving'/>
        <div className='overlay'>
            <div className='search-bar'>
                <input type="text" placeholder="Pick-up locations" />
                <input type="text" placeholder="Drop-off locations" />

                <div className='search-bar-row'>
                    <input type="date" placeholder="Pick-up date" />
                    <input type="time" placeholder="Pick-up time" />
                    <input type="date" placeholder="Drop-off date" />
                    <input type="time" placeholder="Drop-off time" />
                    <button type="submit">Search</button>

                </div>
            </div>
        </div>
        <div className='hero-con'>
            <div className='hero-info'>
                    <h1>Why ee?</h1>
                    <ul>
                        <li>
                            <strong>Reserve direct for our Best Rate Guarantee</strong>
                            <p>Found the same Hertz car for less? We’ll match it plus 10% off.</p>
                        </li>
                        <br></br>
                        <li>
                            <strong>Reserve direct for our Best Rate Guarantee</strong>
                            <p>Found the same Hertz car for less? We’ll match it plus 10% off.</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>Reserve direct for our Best Rate Guarantee</strong>
                            <p>Found the same Hertz car for less? We’ll match it plus 10% off.</p>
                        </li>
                        <br></br>
                        <li>
                            <strong>Reserve direct for our Best Rate Guarantee</strong>
                            <p>Found the same Hertz car for less? We’ll match it plus 10% off.</p>
                        </li>
                    </ul>

            </div>

        </div>
        
        

    </section>
  )
}
