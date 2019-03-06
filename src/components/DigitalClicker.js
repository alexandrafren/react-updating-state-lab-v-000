// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  updateClicked = () => {
    this.setState({
      timesClicked: += 1
    })
  }

  render() {
    return (
      <button>{this.state.timesClicked}</button>
    )
  }

}
