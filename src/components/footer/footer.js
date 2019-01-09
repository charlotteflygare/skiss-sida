import React from "react"
import Button from "../button/button.js"
import Grid from "../grid/grid.js"
import "./footer.scss"

class Footer extends React.Component {

  render() {
    return (
      <div className="footer-section">
        <Grid>
          <div className="footer-text">
            <div className="footer-image">
              <img src="./images/logo_icon.png" alt="heart" />
            </div>
            <div className="footer-text-column">
              <h4>Företaget</h4>
              <p>
                <span>
                Om Min Doktor
                </span>
              </p>
              <p>
                <span>Jobba hos oss</span>
              </p>
              <p>
                <span>Utmärkelser</span>
              </p>
              <p><span>Press</span></p>
            </div>
            <div className="footer-text-column">
              <h4>Tjänsten</h4>
              <p>
                <span>Cookies</span>
              </p>
              <p>
                <span>Policy </span>
              </p>
              <p>
                <span>Villkor</span>
              </p>
              <p>
                <span>Responsible Disclosure Policy</span>
              </p>
              <p>
                <span>Användarregler</span>
              </p>
            </div>
        </div>
        </Grid>
        </div>
    )
  }

}

export default Footer
