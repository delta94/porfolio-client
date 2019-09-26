import { takeEvery, all, put, fork, cancel, cancelled, take } from 'redux-saga/effects';
import { slice } from 'lodash';
import * as ActionCreators from 'Redux/actions/actionCreators';
import * as ActionTypes from 'Redux/actions/actionTypes';
import PROJECTS from 'Assets/Fakers/projects';

function* doFecthFeatureProjects() {
    //replace for api call
    try {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                const a = Math.random();
                if (a < 10.8) {
                    resolve(true);
                }
                else {
                    reject(false);
                }
            }, 1800);
        });
        yield put(ActionCreators.saveFeatureProjects(slice(PROJECTS, 0, 4)));
    }
    catch {
        yield put(ActionCreators.aboutPageErrorTrigger('doFetchFeatureProjects'));
        yield put(ActionCreators.saveError('fetchFeatureProjects', 500));
    }
    finally {
        if (yield cancelled()) {
            yield put(ActionCreators.saveError('fetchFeatureProjects', false));
        }
    }
}

function* fetchFeatureProjectsWorker() {
    yield put(ActionCreators.saveLoading('fetchFeatureProjects', true));
    const task = yield fork(doFecthFeatureProjects);
    const action = yield take([ActionTypes.AboutPageErrorTrigger, ActionTypes.SaveFeatureProjects]);
    if (action.type === ActionTypes.AboutPageErrorTrigger && action.cause !== 'doFetchFeatureProjects')
        yield cancel(task);
    yield put(ActionCreators.saveLoading('fetchFeatureProjects', false));
}

function* fetchFeatureProjectsWatcher() {
    yield takeEvery(ActionTypes.FetchFeatureProjects, fetchFeatureProjectsWorker);
}

//--- FETCH PROJECTS 
function* fetchProjectsWorker() {
    yield put(ActionCreators.saveLoading('fetchProjects', true));
    //replace for api call
    try {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                const a = Math.random();
                if (a < 10.8) {
                    resolve(true);
                }
                else {
                    reject(false);
                }
            }, 1200);
        });
        yield put(ActionCreators.saveProjects(PROJECTS));
    }
    catch {
        yield put(ActionCreators.saveError('fetchProjects', 404));
    }
    yield put(ActionCreators.saveLoading('fetchProjects', false));
}

function* fetchProjectsWatcher() {
    yield takeEvery(ActionTypes.FetchProjects, fetchProjectsWorker);
}

export default function* rootSaga() {
    yield all([
        fetchFeatureProjectsWatcher(),
        fetchProjectsWatcher()
    ]);
};