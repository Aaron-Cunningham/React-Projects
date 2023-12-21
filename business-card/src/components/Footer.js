import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className='container--footer'>
        <ul className='socials'>
            <li><FaFacebookSquare color='white' size={"30"}/></li>
            <li><FaTwitterSquare color='white' size={"30"}/></li>
            <li><FaInstagramSquare color='white' size={"30"}/></li>
            <li><FaGithubSquare color='white' size={"30"}/></li>
        </ul>
    </footer>
  )
}
