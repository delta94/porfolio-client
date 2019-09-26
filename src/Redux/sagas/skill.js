import { takeEvery, all, put, take, cancel, cancelled, fork } from 'redux-saga/effects';
import * as ActionTypes from 'Redux/actions/actionTypes';
import * as ActionCreators from 'Redux/actions/actionCreators';
import SKILLS from 'Assets/Fakers/skills';

function* doFetchSkills() {
    //replace for api call
    try {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                const a = Math.random();
                if (a > -0.5) {
                    resolve(true);
                }
                else {
                    reject(false);
                }
            }, 2000);
        });
        yield put(ActionCreators.saveSkills(SKILLS));
    }
    catch {
        yield put(ActionCreators.aboutPageErrorTrigger('doFetchSkills'));
        yield put(ActionCreators.saveError('fetchSkills', 500));
    }
    finally {
        if (yield cancelled())
            yield put(ActionCreators.saveError('fetchSkills', false));
    }
}

function* fetchSkillsWorker() {
    yield put(ActionCreators.saveLoading('fetchSkills', true));
    const task = yield fork(doFetchSkills);
    const action = yield take([ActionTypes.AboutPageErrorTrigger, ActionTypes.SaveSkills]);
    if (action.type === ActionTypes.AboutPageErrorTrigger && action.cause !== 'doFetchSkills')
        yield cancel(task);
    yield put(ActionCreators.saveLoading('fetchSkills', false));
}

function* fetchSkillsWatcher() {
    yield takeEvery(ActionTypes.FetchSkills, fetchSkillsWorker);
}

export default function* rootSaga() {
    yield all([
        fetchSkillsWatcher(),
    ]);
};