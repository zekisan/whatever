import { combineReducers } from 'redux';

import AboutReducer from './About'
import TemperatureReducer from './Temperature'

const rootReducer = combineReducers({
    AboutReducer,
    TemperatureReducer
});

export default rootReducer;