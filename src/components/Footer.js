import React from 'react'
import logogithub from "./public/assets"

const Footer = () => {
    return (
        <div className = "container d-flex justify-content-center" id ="socials">
      
        <a href="https://github.com/ShayanneSamarasinghe"  target="_blank"><img className="btn" id="logo" src={logogithub}></img></a>
        <a href="https://twitter.com/ShayanneSamsara" target="_blank"><img className="btn" id="logo" src={logoig}></img></a>
        <a href="https://www.linkedin.com/in/shayanne-samarasinghe-48569111a/" target="_blank"><img className="btn" id="logo" src=""></img></a>
        <a href="https://www.instagram.com/sammysomething/?hl=en" target="_blank"><img className="btn" id="logo" src=""></img></a>


    

        </div>
    )
}

export default Footer;
