import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = { hasError: false }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Whoops, looks like something went wrong.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
