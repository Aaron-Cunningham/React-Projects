import React from 'react'
import { FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Header() {
  return (
    <div className='header'>
        <div className='container'>
            <img className='business--woman' src='woman.png' alt='business-woman'/>
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <p>Laura Smith Website</p>
            <div className='button--header'>
                <button className='button--email'><MdEmail className='email--logo'/> Email</button>
                <button className='button--linkedin'><FaLinkedin className='linkedin--logo'/> Linkedin</button>

            </div>

        </div>
    </div>
  )
}
