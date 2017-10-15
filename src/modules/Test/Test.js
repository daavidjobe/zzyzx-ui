import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    message: 'This is a test module',
  }

  render() {
    return <div>{this.state.message}</div>
  }
}
