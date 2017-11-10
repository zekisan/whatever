import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { Navbar, NavItem, Footer } from 'react-materialize';
import { LinkContainer } from 'react-router-bootstrap';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

import { callTemperatureApi } from './stores/reducers/Temperature';
import store from './stores';

class Main extends Component {
    componentDidMount() {
        this.props.dispatch(callTemperatureApi());
    }

    render() {
        const { title, dispatch, about, temp } = this.props;
        const routes = [
            {
                path: '/',
                exact: true,
                main: () => <App title={title}/>
            },
            {
                path: '/about',
                main: () => <About dispatch={dispatch} number={about.number}/>
            },
            {
                main: () => <NotFound/>
            }
        ]

        return (
            <Router>
                <div>
                    <Navbar brand={`${temp.temp}°C`} right>
                        <LinkContainer to="/"><NavItem>Home</NavItem></LinkContainer>
                        <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>
                    </Navbar>
                    <div>
                        <Switch>
                            {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.main}
                                    />
                                )
                            )}
                        </Switch>
                    </div>
                    <Footer copyrights="&copy 2015 Copyright Text"
                        moreLinks={
                            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        }
                        links={
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        }
                        className='example'
                    >
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </Footer>;
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return { 
        about: state.AboutReducer.toJS(),
        temp: state.TemperatureReducer.toJS()
     }
}

const ConnectedComponent = connect(mapStateToProps)(Main);

export default function Root(props) {
    return <Provider store={store}><ConnectedComponent {...props} /></Provider>
}