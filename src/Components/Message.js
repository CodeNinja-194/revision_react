import React, { Component } from 'react'

class Message extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: props.message
    }
  }

  changeMessage() {
    this.setState({
      message: 'L21CS194!'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Click Me 😎</button>
      </div>
    )
  }
}

export default Message