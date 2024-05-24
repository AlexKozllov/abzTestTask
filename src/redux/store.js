import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { usersReducer } from './reducers/usersReducer.js';
import { loading } from './reducers/loaderReducer.js';

const rootReducer = combineReducers({
    users: usersReducer,
    loading: loading
});

const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

    devTools: process.env.NODE_ENV !== 'production'
});

export { store };
