import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className='nav'>
        <a href='#home'>
            <img src='https://www.eecar-rental.com/images/AHD7ueIGwXsuv0yYjH8tONSd5eukdUCVWJZ8gHU4dItEkK2YgINi6HjrIyhumbwsnOBVJs8OUPMWYUHd.png' className='logo' alt='logo'/>
        </a>
        
            <ul className='nav-items'>
                <a href='#carhire'>
                    <li>Car Hire</li>
                </a>
                <a href='#locations'>
                    <li>Locations</li>
                </a>
                <a href='#offers'>
                    <li>Offers</li>
                </a>
                <a href='#carhire'>
                    <li>Car Hire</li>
                </a>
                <a href='#help'>
                    <li>Help</li>
                </a>


            </ul>
            <a href='#sign-up'>
                    <button className='sign-up-btn'>Sign up</button>
            </a>

            <div className='line'></div>
        </header>

  )
}
