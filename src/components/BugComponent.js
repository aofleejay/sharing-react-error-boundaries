import React, { Component } from 'react'

class BugComponent extends Component {
  render() {
    throw new Error('Crashed!!!')
    return (
      <div />
    )
  }
}

export default BugComponent
