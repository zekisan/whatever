import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => {
    return (
        <Router {...props}>
            <Switch>
                <Route exact path="/"><App title={props.title}/></Route>
                <Route path="/about" component={About}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default Routes;