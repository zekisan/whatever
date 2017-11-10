import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

ReactDOM.render(<Routes title="Fookin chicken" />, document.getElementById('root'));
registerServiceWorker();
