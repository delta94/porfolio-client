import { all } from 'redux-saga/effects';

function* helloSaga() {
    console.log('Hello quotation');
}

function* hiSaga() {
    console.log('Hi quotation');
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        hiSaga(),
    ]);
};