import { all } from 'redux-saga/effects';

function* helloSaga() {
    console.log('Hello blog');
}

function* hiSaga() {
    console.log('Hi blog');
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        hiSaga(),
    ]);
};