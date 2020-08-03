import React from 'react'
import Cards from "../components/Cards"

const Portfolio = () => {
    return (
        <div>
         <Cards name="NutShell"  repoLink= "https://github.com/wesycool/nutShell" appLink= "https://wesycool.github.io/Project1-Edmund/Project1-Shayanne/"  />
         <Cards name="PageExchange" repoLink="https://github.com/ChristineClemens/TheSemicolons" appLink="https://obscure-stream-03506.herokuapp.com/"/>
         <Cards name="Note Taker" repoLink="https://github.com/ShayanneSamarasinghe/Note-Taker" appLink="https://still-badlands-63453.herokuapp.com/"/>     
        </div>
    )
}

export default Portfolio;
