// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isStatus: true}

  renderMethod = () => {
    this.setState(prevState => ({isStatus: !prevState.isStatus}))
  }

  bgColor = () => {
    const {isStatus} = this.state
    return isStatus ? 'bgWhite' : 'bgDark'
  }

  headingText = () => {
    const {isStatus} = this.state
    return isStatus ? 'whiteText' : 'darkText'
  }

  btnText = () => {
    const {isStatus} = this.state
    return isStatus ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const buttonText = this.btnText()
    const bgEl = this.bgColor()
    const headEl = this.headingText()

    return (
      <div className={bgEl}>
        <h1 className={headEl}>Click To Change Mode</h1>
        <button className="button" type="button" onClick={this.renderMethod}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default LightDarkMode
