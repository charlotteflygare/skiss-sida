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
                <h4>Tävlingsklasser</h4>
                <p>
                  Sömnen har en egen dygnsrytm men kan påverkas av våra levnadsvanor.
                  Under nätterna har vi perioder av djupare och lättare sömn samt perioder
                  då vi drömmer. Dessa perioder beror på hur hjärnans aktivitet varierar
                  under våra olika sömnstadier.
                </p>
              </div>
              <div className="how-container-image">
                <div className="how-container-icons">
                  <div className="how-container-icons-text">
                    <img src="./images/moonstar.gif" alt="deepest" />
                    <p>djupast</p>
                  </div>
                  <div className="how-container-icons-text">
                    <img src="./images/clock.png" alt="quickest" />
                    <p>fortast</p>
                  </div>
                  <div className="how-container-icons-text">
                    <img src="./images/curve.gif" alt="longest" />
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
                    <p>man</p>
                  </div>
                  <div className="how-container-icons-text">
                    <img src="./images/damherr.png" alt="man" />
                    <p>kvinna</p>
                  </div>
                </div>
              </div>
              <div className="how-container-text-gender">
                <h4>Kön</h4>
                <p>
                  Hur mycket man sover är väldigt individuellt och
                  varierar från person till person. De flesta sover
                  mellan 5och 10 timmar per natt. Kvinnor behöver
                  generellt sätt lite mer sömn än män. Det förhöjda
                  sömnbehovet hos kvinnor har speciellt två anledningar:
                  kroppstemperaturen och hormoner.
                </p>
              </div>
            </div>
          </Grid>
        </div>

        <div className="why-container-wrapper">
          <Grid>
            <div className="wrapper-title-somn">
              <h2>Lider du av sömnsvårigheter?</h2>
            </div>
            <div className="why-container">
              <div className="why-container-text">
                <p>
                  Sömnproblem är vanligt och beror ofta på stress eller större förändringar
                  i livet. De allra flesta upplever att de lider av sömnbrist under kortare
                  perioder. Om sömnbesvären inte går över av sig själva utan förvärras kan
                  du behöva hjälp att bryta den onda cirkeln.
                  <span>
                  Boka tid med någon av våra psykologer och få hjälp med att förbättra din sömn.
                  </span>
                </p>
                <h4>
                  <span>
                  Chatta med någon av våra psykologer
                  </span>
                </h4>
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
