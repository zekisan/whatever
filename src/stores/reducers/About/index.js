import Immutable from 'immutable';

const ADD_NUMBER = "about/ADD_NUMBER";

const DEFAULT_STATE = Immutable.fromJS({
    number: 0
});

export default function reducer(state = DEFAULT_STATE, action = {}) {
    switch(action.type) {
        case ADD_NUMBER:
            return state.set('number', state.get('number') + 1);
        default:
            return state;
    }
}

export function addNumber() {
    return { type: ADD_NUMBER };
}