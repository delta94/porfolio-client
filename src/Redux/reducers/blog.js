import * as ActionTypes from 'Redux/actions/actionTypes';

export default (state = {
    list: [],
    current: null,
}, action) => {
    switch(action.type) {
        default:
            return state;
    }
}