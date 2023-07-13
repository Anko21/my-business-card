import React from 'react'
import Anko from '../images/Anko.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className='header'>
        <img src={Anko} className='img--prof' alt='profile photo'/>
        <h1>Anna Kontaratou</h1>
        <h3>Front end developer</h3>
        <div className='button--socials'>
        <FontAwesomeIcon icon={faLinkedin} className='linkedIn-icon' />
        <a href='https://www.linkedin.com/in/anna-kontaratou-032112183/' className='header--socials'> 
            LinkedIn
        </a>
        </div>
    </div>
  )
}

export default Header;