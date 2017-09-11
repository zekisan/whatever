import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link }from 'react-router-dom';
import classnames from 'classnames';
import logo from './logo.svg';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

class App extends Component {
  static propTypes = {
    title: PropTypes.string
  };
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, title } = this.props;
    return (
      <div className={classnames('App', className)}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{title}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p><Link to="/about">About</Link></p>
        <Link to="/about"><Button color="danger">About</Button></Link>
        <Wrapper>
          <Title>First component using styled components</Title>
        </Wrapper>
      </div>
    );
  }
}

export default App;
