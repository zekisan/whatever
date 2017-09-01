import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link }from 'react-router-dom';
import classnames from 'classnames';

import './style.css';

export default class About extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className, ...props } = this.props;
        return (
            <div className={classnames('About', className)} {...props}>
                <p><Link to="/">Home</Link></p>
                <h1>Fuck the king 2 - Abouts</h1>
            </div>
        );
    }
}