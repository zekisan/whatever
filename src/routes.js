import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

import aboutReducer from './stores/reducers/About';

const Routes = (props) => {
    return (
        <Provider store={props.store}>
            <Router>
                <Switch>
                    <Route exact path="/"><App title={props.title}/></Route>
                    <Route path="/about"><About store={props.store} number={props.about.number}/></Route>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Router>
        </Provider>
    );
}

function mapStateToProps(state) {
    return { about: state.AboutReducer.toJS() }
}

const ConnectedComponent = connect(mapStateToProps)(Routes);

export default function Root(props) {
    return <Provider store={props.store}><ConnectedComponent {...props} /></Provider>
}

//export default Routes;