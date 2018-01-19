import React, { Component } from 'react'
import Layout from './Layout'

class ErrorBoundary extends Component {
  state = { hasError: false, errorMessage: null }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorMessage: error.message })
  }

  render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <h1>Whoops, looks like something went wrong.</h1>
          <p>{this.state.errorMessage}</p>
        </Layout>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
