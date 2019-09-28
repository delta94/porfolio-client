import { all, takeEvery, put } from 'redux-saga/effects';
import QUOTATIONS from 'Assets/Fakers/quotations';
import * as ActionCreators from 'Redux/actions/actionCreators';
import * as ActionTypes from 'Redux/actions/actionTypes';

function* fetchQuotationsWorker() {
    yield put(ActionCreators.saveLoading('fetchQuotations', true));
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
        yield put(ActionCreators.saveQuotations(QUOTATIONS));
    }
    catch {
        yield put(ActionCreators.saveError('fetchQuotations', 500));
    }
    yield put(ActionCreators.saveLoading('fetchQuotations', false));
}

function* fetchQuotationsWatcher() {
    yield takeEvery(ActionTypes.FetchQuotations, fetchQuotationsWorker);
}

export default function* rootSaga() {
    yield all([
        fetchQuotationsWatcher()
    ]);
};