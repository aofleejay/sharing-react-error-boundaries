import React, { Component } from 'react'
import Layout from './Layout'

class ErrorBoundary extends Component {
  state = { hasError: false }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <h1>Whoops, looks like something went wrong.</h1>
        </Layout>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
