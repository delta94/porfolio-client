import { all, takeEvery, put } from 'redux-saga/effects';
import BLOGS from 'Assets/Fakers/blogs';
import * as ActionCreators from 'Redux/actions/actionCreators';
import * as ActionTypes from 'Redux/actions/actionTypes';

function* fetchBlogsWorker() {
    yield put(ActionCreators.saveLoading('fetchBlogs', true));
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
        yield put(ActionCreators.saveBlogs(BLOGS));
    }
    catch {
        yield put(ActionCreators.saveError('fetchBlogs', 404));
    }
    yield put(ActionCreators.saveLoading('fetchBlogs', false));
}

function* fetchBlogsWatcher() {
    yield takeEvery(ActionTypes.FetchBlogs, fetchBlogsWorker);
}

export default function* rootSaga() {
    yield all([
        fetchBlogsWatcher()
    ]);
};