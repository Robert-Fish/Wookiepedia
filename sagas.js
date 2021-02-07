import {call, put, takeEvery, takeLatest, all, fork} from 'redux-saga/effects';

function* getPeople() {
  try {
    const json = yield fetch('https://swapi.dev/api/people', {
      method: 'GET',
    }).then((response) => response.json());
    yield put({type: 'GET_PEOPLE', payload: json.results});
  } catch (e) {}
}

export default function* rootSaga() {
  yield all([getPeople()]);
}
