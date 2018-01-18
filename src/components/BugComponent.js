import React, { Component } from 'react'
import Layout from './Layout'

class BugComponent extends Component {
  render() {
    throw new Error('Crashed!!!')
    return (
      <Layout>
        <h1>Content</h1>
      </Layout>
    )
  }
}

export default BugComponent
