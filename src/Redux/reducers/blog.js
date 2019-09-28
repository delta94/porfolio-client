import * as ActionTypes from 'Redux/actions/actionTypes';

export default (state = {
    list: [],
    current: null,
}, action) => {
    switch(action.type) {
        case ActionTypes.SaveBlogs:
            return {
                ...state,
                list: [...action.payload],
            }
        default:
            return state;
    }
}