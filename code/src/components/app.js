import React from "react"
import Hero from "./hero/hero.js"
import Grid from "./grid/grid.js"
import Button from "./button/button.js"
import Footer from "./footer/footer.js"

import "./app.scss"

class App extends React.Component {

  render() {
    return (
      <div>
      <div className="wrapper">
        <Hero />
        <div className="wrapper-title">
          <h2>Hur går det till?</h2>
        </div>

        <Grid>
          <div className="how-container">
            <div className="how-container-text">
              <h4>Tempor incididunt</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex commodo consequat.
              </p>
            </div>
            <div className="how-container-image">
              <div className="how-container-icons">
                <div className="how-container-icons-text">
                  <img src="./images/djupast_sv.png" alt="deepest" />
                  <p>djupast</p>
                </div>
                <div className="how-container-icons-text">
                  <img src="./images/fortast_sv.png" alt="quickest" />
                  <p>fortast</p>
                </div>
                <div className="how-container-icons-text">
                  <img src="./images/langst_sv.png" alt="longest" />
                  <p>längst</p>
                </div>
              </div>
            </div>
          </div>

          <div className="how-container">
            <div className="how-container-image-gender">
              <div className="how-container-icons-gender">
                <div className="how-container-icons-text">
                  <img src="./images/damherr.png" alt="woman" />
                  <p>dam</p>
                </div>
                <div className="how-container-icons-text">
                  <img src="./images/damherr.png" alt="man" />
                  <p>herr</p>
                </div>
              </div>
            </div>
            <div className="how-container-text-gender">
              <h4>Tempor incididunt</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex commodo consequat.
              </p>
            </div>

          </div>
          </Grid>
          </div>

        <div className="why-container-wrapper">
            <Grid>
          <div className="wrapper-title">
            <h2>Lider du av sömnsvårigheter?</h2>
          </div>
          <div className="why-container">
            <div className="why-container-text">
              <p>Boka tid med någon av våra psykologer och få hjälp med att förbättra din sömn.</p>
              <h4><span>Chatta med någon av våra psykologer</span></h4>
              <button className="lasmer-button" type="button">Läs mer</button>
            </div>
            <div className="why-container-icons-gif">
              <img src="./images/chaticon2.gif" alt="" />
            </div>
          </div>
          </Grid>

        </div>


        <Footer />
        </div>

    )
  }

}

export default App
