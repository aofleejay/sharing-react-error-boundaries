import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import BugComponent from './BugComponent'

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <BugComponent />
      </ErrorBoundary>
    )
  }
}

export default App
