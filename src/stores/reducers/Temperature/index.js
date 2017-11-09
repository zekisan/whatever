'use strict';

import Immutable from 'immutable';
import io from 'socket.io-client';

const UPDATE_TEMPERATURE = "about/UPDATE_TEMPERATURE";

const DEFAULT_STATE = Immutable.fromJS({
    temp: 0
});

export default function reducer(state = DEFAULT_STATE, action = {}) {
    switch(action.type) {
        case UPDATE_TEMPERATURE:
            return state.set('temp', action.data);
        default:
            return state;
    }
}

function updateTemperature(data) {
    return { type: UPDATE_TEMPERATURE, data };
}

// ACTION CREATORS

export function callTemperatureApi() {
    return function(dispatch) {
        const socket = io('http://localhost:8080');
        socket.on("FromAPI", data => {
            const convertedTemp = data.main.temp - 273;
            const roundedTemp = Math.round(convertedTemp);
            dispatch(updateTemperature(roundedTemp)); 
        })
    }
}