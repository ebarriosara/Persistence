import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistenceCustomMiddleware } from './middlewares';
import { reducers } from './reducers';

const middlewares = [
  reduxThunk,
  persistenceCustomMiddleware,
];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);
