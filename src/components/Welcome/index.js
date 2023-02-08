// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribe: true}

  onSubscribe = () => {
    this.setState({subscribe: false})
  }

  onSubscribed = () => {
    this.setState({subscribe: true})
  }

  render() {
    const {subscribe} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {subscribe ? (
          <button onClick={this.onSubscribe} type="button" className="button">
            Subscribe
          </button>
        ) : (
          <button onClick={this.onSubscribed} type="button" className="button">
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
