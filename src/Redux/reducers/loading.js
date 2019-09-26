import * as ActionTypes from 'Redux/actions/actionTypes';

export default (state = {}, action) => {
    switch(action.type) {
        case ActionTypes.SaveLoading:
            return {
                ...state,
                [action.payload.type]: action.payload.status,
            };
        default:
            return state;
    }
}