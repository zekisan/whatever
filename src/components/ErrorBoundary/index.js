import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false, error: null, info: null }
  }

  componentDidCatch (error, info) {
    this.setState({ hasError: true, error: error.message, info: info.componentStack })
  }

  render () {
    const { hasError, error, info } = this.state
    return hasError ? <ErrorMessage error={error} info={info} /> : this.props.children
  }
}

const ErrorMessage = ({ error, info }) => {
  return (
  [
    <h2 key='A'>Deu Merda!</h2>,
    <p key='B'>{`Erro: ${error}`}</p>,
    <p key='C'>{`Info: ${info}`}</p>
  ]
  )
}
