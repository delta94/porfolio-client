import * as ActionTypes from 'Redux/actions/actionTypes';

export default (state = {
    list: [],
    feature: [],
    current: null,
}, action) => {
    switch(action.type) {
        case ActionTypes.SaveFeatureProjects:
            return {
                ...state,
                feature: [...action.payload],
            };
        case ActionTypes.SaveProjects:
            return {
                ...state,
                list: [...action.payload],
            };
        default:
            return state;
    }
}