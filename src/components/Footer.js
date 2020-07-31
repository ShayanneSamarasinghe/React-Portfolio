import React from 'react'
import logogithub from "../assets/logogithub.svg"
import logoig from "../assets/logoig.svg"
import logolinkedin from "../assets/logolinkedin.svg"
import logotwitter from "../assets/logotwitter.svg"

const Footer = () => {
    return (
        <div>
        <div className = "container d-flex justify-content-center fixed-bottom" id ="socials">  
        <h3 className ="socialTitle d-flex justify-content-center" >Socials</h3>
        
      
        <a href="https://github.com/ShayanneSamarasinghe"  target="_blank"><img className="btn" id="logo" src={logogithub}></img></a>
        <a href="https://twitter.com/ShayanneSamsara" target="_blank"><img className="btn" id="logo" src={logotwitter}></img></a>
        <a href="https://www.linkedin.com/in/shayanne-samarasinghe-48569111a/" target="_blank"><img className="btn" id="logo" src={logolinkedin}></img></a>
        <a href="https://www.instagram.com/sammysomething/?hl=en" target="_blank"><img className="btn" id="logo" src={logoig}></img></a>


    
        </div>
        </div>
    )
}

export default Footer;
