import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from 'Redux/combineReducer';
import { rootSaga } from 'Redux/combineSaga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;