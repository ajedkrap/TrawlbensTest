import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import app from './app';
// import profile from './profile'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app'],
};

const rootReducer = combineReducers({
  app,
});

export default persistReducer(persistConfig, rootReducer);
