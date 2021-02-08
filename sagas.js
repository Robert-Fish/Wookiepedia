import {put, fork, takeLatest} from 'redux-saga/effects';

export function* getPeople() {
  try {
    const json = yield fetch('https://swapi.dev/api/people', {
      method: 'GET',
    }).then((response) => response.json());
    yield put({type: 'GET_PEOPLE_SUCCESS', payload: json.results});
  } catch (e) {
    yield put({type: 'GET_PEOPLE_FAILURE', payload: 'Error fetching people'});
  }
}

export function* getSpecies() {
  try {
    const json = yield fetch('https://swapi.dev/api/species', {
      method: 'GET',
    }).then((response) => response.json());
    yield put({type: 'GET_SPECIES_SUCCESS', payload: json.results});
  } catch (e) {
    yield put({type: 'GET_SPECIES_FAILURE', payload: 'Error fetching species'});
  }
}

export default function* rootSaga() {
  yield takeLatest('GET_PEOPLE', getPeople);
  yield takeLatest('GET_SPECIES', getSpecies);
}
