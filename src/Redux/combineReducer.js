import { combineReducers } from 'redux';
import skillReducer from 'Redux/reducers/skill';
import projectReducer from 'Redux/reducers/project';
import quotationReducer from 'Redux/reducers/quotation';
import blogReducer from 'Redux/reducers/blog';
import friendReducer from 'Redux/reducers/friend';
import errorReducer from 'Redux/reducers/error';
import loadingReducer from 'Redux/reducers/loading';

export default combineReducers({
    error: errorReducer,
    loading: loadingReducer,
    skill: skillReducer,
    project: projectReducer,
    quotation: quotationReducer,
    blog: blogReducer,
    friend: friendReducer,
});