import React from 'react'
import Footer from "../components/Bio"
import ShayannePic from "../assets/ShayannePic.jpg"
import doggy from "../assets/doggy.jpg"
import camNme from "../assets/camNme.jpg"

const About = () => {
    return (
        <div>
            <div className="container outerBorder">
                <div className="container justify-content-center Bio">
                <p className="Para" >Hi! My Name is Shayanne. Welcome to my portfolio page.  A little about me: I am a graduate of the University of Ottawa and Sheridan College. I began my professional career as a casting director and production coordinator on tv and commercial productions in Toronto, Canada. I’ve always been interested in coding/programming so I figured I would take the downtime I had and further build on that curiosity. Since May of 2020, I’ve completed several interesting programming projects and learned many aspects of front end and back end programming. In my downtime I watch movies, play with my dog and take photos. Need to get in touch? My email is shayannesamarasinghe@gmail.com </p>
                </div>
            </div>

            <div className ="container d-flex justify-content-center" id="imgdiv">
                <img src={ShayannePic} alt="Shayanne Samarasinghe" className="img-fluid" id="ShayannePic"></img>
                <img src={doggy} alt="Dog" className="img-fluid" id="dogPic"></img>    
                <img src={camNme} alt="Shayanne with Camera" className="img-fluid" id="shywithcamPic"></img>
            </div>
                    
        </div>
    )
}

export default About;

