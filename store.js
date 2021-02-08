import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import peopleReducer from './reducers/peopleReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import speciesReducer from './reducers/speciesReducer';

const rootReducer = combineReducers({
  people: peopleReducer,
  species: speciesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeSetup =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  rootReducer,
  composeSetup(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
