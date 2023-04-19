import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, word: ''}

  getWord = event => {
    this.setState({word: event.target.value})
  }

  //   getCount = () => {
  //     const {word} = this.state
  //     if (word !== '') {
  //       this.setState({count: word.length})
  //     }
  //   }

  render() {
    const {count} = this.state
    const {word} = this.state
    console.log(count)
    console.log(word)

    return (
      <div className="container">
        <div className="flex-items-row">
          <div className="content">
            <h1 className="heading">
              Calculate the <br />
              Letters you <br /> enter
            </h1>
            <label htmlFor="letter" className="message">
              Enter the phrase
            </label>
            <input
              type="text"
              className=""
              placeholder="Enter the phrase"
              onChange={this.getWord}
              id="letter"
            />
            <div className="">
              <p className="card-heading">No.of letters: {word.length}</p>
            </div>
          </div>
          <div>
            <img
              className="img-content"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
