import React, {Component} from "react"

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return {hasError: true, error}
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error)
    console.error(errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI or an error message
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>{this.state.error.toString()}</p>
        </div>
      )
    }

    return this.props.children // Render the child components
  }
}

export default ErrorBoundary
