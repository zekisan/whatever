import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link }from 'react-router-dom';
import classnames from 'classnames';
import logo from './logo.svg';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

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
      </div>
    );
  }
}

export default App;
