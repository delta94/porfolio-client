import * as ActionTypes from 'Redux/actions/actionTypes';

export default (state = {}, action) => {
    switch(action.type) {
        case ActionTypes.SaveError:
            return {
                ...state,
                [action.payload.type]: action.payload.code,
            };
        default:
            return state;
    }
}