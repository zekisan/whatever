import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

import store from './stores';

ReactDOM.render(<Routes title="Fookin chicken" store={store}/>, document.getElementById('root'));
registerServiceWorker();
