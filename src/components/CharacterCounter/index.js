import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from '../UserInput'

import './index.css'

class CharacterCounter extends Component {
  state = {searchInput: '', inputList: []}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSubmitInput = event => {
    event.preventDefault()

    const {searchInput} = this.state
    const newInputList = {
      id: v4(),
      userText: searchInput,
      textCount: searchInput.length,
    }

    this.setState(prevState => ({
      inputList: [...prevState.inputList, newInputList],
      searchInput: '',
    }))
  }

  renderUserInputList = () => {
    const {inputList} = this.state

    return inputList.length === 0 ? (
      <img
        className="image"
        alt="no user inputs"
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      />
    ) : (
      <ul>
        {inputList.map(eachItem => (
          <UserInput key={eachItem.id} inputList={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {inputList, searchInput} = this.state
    console.log(inputList)

    return (
      <div className="bg">
        <div className="bg-container">
          <div className="left-panel">
            <div className="content-container">
              <h1 className="content-text">
                Count the characters like a Boss...
              </h1>
            </div>
            <div>{this.renderUserInputList()}</div>
          </div>

          <div className="right-panel">
            <h1 className="char-text">Character Counter</h1>
            <form onSubmit={this.onSubmitInput} className="formEl">
              <input
                value={searchInput}
                onChange={this.onChangeInput}
                placeholder="Enter the Characters here"
                className="inputEl"
                type="text"
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
