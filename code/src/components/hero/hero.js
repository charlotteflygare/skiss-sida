import React from "react"
import Button from "../button/button.js"
import "./hero.scss"

class Hero extends React.Component {

  render() {
    return (
      <div className="hero-section">
        <div className="headerWrapper">
          <div className="header-info">
            <img src="./images/logo.png" alt="logotyp" />
          </div>
        </div>
        <div className="hero-image">
          <img src="./images/bg.jpg" alt="clouds" />
        </div>
        <div className="hero-text">
          <h1>Sömn—SM</h1>
          <p>
            <span>
            Är du Sveriges bästa sovare? 
            </span>
            <span>
            Anmäl dig själv eller nominera
            </span>
            <span>
            någon du känner.
            </span>
          </p>
          <button className="anmal-button" type="button">Anmäl</button>
          <div className="down-arrow bounce">
            <img width="40" height="40" src="./images/arrow.svg " alt="bounce" />
          </div>
        </div>
      </div>
    )
  }

}

export default Hero
