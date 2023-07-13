import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='footer'>
        <a href="mailto: kontaratou.am@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} style={{color: "#918E9B", width:"25px"}} />
        </a>
        <a href='https://github.com/Anko21'>
            <FontAwesomeIcon icon={faGithub} style={{color: "#918E9B",width:"25px"}} />
        </a>

    </div>
  )
}

export default Footer