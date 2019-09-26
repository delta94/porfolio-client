import { all } from 'redux-saga/effects';
import skill from 'Redux/sagas/skill';
import project from 'Redux/sagas/project';
import blog from 'Redux/sagas/blog';
import quotation from 'Redux/sagas/quotation';
import friend from 'Redux/sagas/friend';

export function* rootSaga() {
    yield all([
        skill(),
        project(),
        blog(),
        quotation(),
        friend(),
    ]);
};