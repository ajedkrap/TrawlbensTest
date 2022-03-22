import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware, logger, thunk),
);

const persistor = persistStore(store);

export default {store, persistor};
