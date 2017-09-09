import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const reducer = function reducer(state = { number: 0 }, action = {}) {
    switch(action.type) {
        case 'ADD_ONE':
            return { number: state.number + 1 }
        default:
            return state;
    }
}

const dispatch = function dispatch(currentState, action) {
    return reducer(currentState, action);
}

class Routes extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.state = dispatch(undefined, {});
    }

    onClick() {
        this.setState(
            dispatch(this.state, { type: 'ADD_ONE' })
        );
    }

    render() {
        const { title } = this.props;
        const { number } = this.state;
        return (
            <Router>
                <Switch>
                    <Route exact path="/"><App title={title}/></Route>
                    <Route path="/about">
                        <About number={number} onClick={this.onClick}/>
                    </Route>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Router>
        );
    }
}

export default Routes;