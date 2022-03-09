import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {namesList: [], inputValue: ''}

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onAddNames = () => {
    const {namesList, inputValue} = this.state
    const userEnterValue = {
      id: v4(),
      name: inputValue,
    }

    const filteredData = [...namesList, userEnterValue]
    this.setState({namesList: filteredData, inputValue: ''})
  }

  render() {
    const {namesList, inputValue} = this.state
    console.log(namesList)
    return (
      <div className="main-bg-container">
        <div className="container">
          <div className="heading-container">
            <h1 className="">
              Count the characters like a <br /> Boss...
            </h1>
          </div>

          <div className="name-displays-container">
            {namesList.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="image"
                alt="no user inputs"
              />
            ) : (
              <ul className="ul-container">
                {namesList.map(eachData => (
                  <li className="li-element" key={eachData.id}>
                    <p>
                      {eachData.name} : {eachData.name.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="container second-container">
          <h1 className="second-title">Character Counter</h1>
          <form onSubmit={this.onAddNames} className="input-container">
            <input
              placeholder="Enter the Characters here."
              value={inputValue}
              onChange={this.onChangeInput}
              type="text"
              className="input-element"
            />
            <button type="submit" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
