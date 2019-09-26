import * as ActionTypes from 'Redux/actions/actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case ActionTypes.SaveFriends:
            return [...action.payload];
        default:
            return state;
    }
}