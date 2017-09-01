import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link }from 'react-router-dom';
import classnames from 'classnames';

export default class NotFound extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className, ...props } = this.props;
        return (
            <div className={classnames('NotFound', className)} {...props}>
                <p><Link to="/">Home</Link></p>
                <h1>404 <small>Not Found :(</small></h1>
            </div>
        );
    }
}