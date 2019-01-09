import React from "react"
import "./style.scss"

class Grid extends React.Component {
  render() {
    return (
      <div className={`grid ${this.props.className}`}>
        {this.props.children}
      </div>
    )
  }
}

export default Grid
