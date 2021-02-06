import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import peopleReducer from './reducers/peopleReducer';

const rootReducer = combineReducers({
  people: peopleReducer,
});

const composeSetup =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const configureStore = () => createStore(rootReducer, composeSetup());

export default configureStore;
