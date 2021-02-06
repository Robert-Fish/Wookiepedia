import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import peopleReducer from './reducers/peopleReducer';
import createSagaMiddleware from 'redux-saga';

const rootReducer = combineReducers({
  people: peopleReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeSetup =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const configureStore = () =>
  createStore(rootReducer, composeSetup(applyMiddleware(sagaMiddleware)));

export default configureStore;
