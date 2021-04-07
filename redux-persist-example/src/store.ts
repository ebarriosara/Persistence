import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducers } from './reducers';

const persistConfig = {
  key: 'counter',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const middlewares = [
  reduxThunk,
];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
  compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

export const persistor = persistStore(store);
