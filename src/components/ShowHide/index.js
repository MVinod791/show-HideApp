// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  showFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="show-hide-bg-container">
        <div className="card-container">
          <h1 className="show-hide-heading">Show/Hide</h1>
          <div className="button-card-container">
            <div className="button-container">
              <button
                className="button "
                type="button"
                onClick={this.showFirstName}
              >
                Show/Hide Firstname
              </button>
              {firstName && <p className="first-name">Joe</p>}
            </div>
            <div className="button-container">
              <button
                className="button"
                type="button"
                onClick={this.showLastName}
              >
                Show/Hide Lastname
              </button>
              {lastName && <p className="first-name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
