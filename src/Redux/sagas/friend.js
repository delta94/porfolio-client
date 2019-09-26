import { takeEvery, all, put, cancel, cancelled, take, fork } from 'redux-saga/effects';
import * as ActionCreators from 'Redux/actions/actionCreators';
import * as ActionTypes from 'Redux/actions/actionTypes';
import FRIENDS from 'Assets/Fakers/friends';

function* doFetchFriends() {
    //Replace for API call
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
        yield put(ActionCreators.saveFriends(FRIENDS));
    }
    catch {
        yield put(ActionCreators.aboutPageErrorTrigger('doFetchFriends'));
        yield put(ActionCreators.saveError('fetchFriends', 500));
    }
    finally {
        if (yield cancelled())
            yield put(ActionCreators.saveError('fetchFriends', false));
    }
}

function* fetchFriendsWorker() {
    yield put(ActionCreators.saveLoading('fetchFriends', true));
    const task = yield fork(doFetchFriends);
    const action = yield take([ActionTypes.AboutPageErrorTrigger, ActionTypes.SaveFriends]);
    if (action.type === ActionTypes.AboutPageErrorTrigger && action.cause !== 'doFetchFriends')
        yield cancel(task);
    yield put(ActionCreators.saveLoading('fetchFriends', false));
}

function* fetchFriendsWatcher() {
    yield takeEvery(ActionTypes.FetchFriends, fetchFriendsWorker);
}

export default function* rootSaga() {
    yield all([
        fetchFriendsWatcher(),
    ]);
}
