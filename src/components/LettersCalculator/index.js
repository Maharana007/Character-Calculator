// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const count = searchInput.length
    const headingText = 'Calculate the Letters you enter'
    const labelText = 'Enter the phrase'
    const imageUrl =
      'https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png'
    return (
      <div className="container">
        <div className="content-card">
          <h1 className="heading"> {headingText} </h1>
          <label className="detail" htmlFor="userInput">
            {' '}
            {labelText}{' '}
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChangeInput}
            id="userInput"
          />
          <p className="text">No.of letters: {count}</p>
        </div>

        <img className="image" src={imageUrl} alt="letters calculator" />
      </div>
    )
  }
}

export default LettersCalculator
