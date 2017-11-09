import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

import { callTemperatureApi } from './stores/reducers/Temperature';

class Main extends Component {
    componentDidMount() {
        this.props.dispatch(callTemperatureApi());
    }

    render() {
        const { title, store, about, temp } = this.props;
        const routes = [
            {
                path: '/',
                exact: true,
                main: () => <App title={title}/>
            },
            {
                path: '/about',
                main: () => <About store={store} number={about.number}/>
            },
            {
                main: () => <NotFound/>
            }
        ]

        return (
            <Router>
                <div style={{ display: 'flex' }}>
                    <div style={{
                        padding: '10px',
                        width: '15%',
                        background: '#f0f0f0'
                    }}>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                        <p>{`Temperatura: ${temp.temp}°C`}</p>
                    </div>
                    <div style={{ flex: 1, padding: '10px' }}>
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
    return <Provider store={props.store}><ConnectedComponent {...props} /></Provider>
}