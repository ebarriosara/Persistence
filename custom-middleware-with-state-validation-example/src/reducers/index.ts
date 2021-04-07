import { AnyAction, CombinedState, combineReducers, Reducer } from 'redux';
import { BaseAction } from '../actions';
import { CounterState, counterReducer } from './counterReducer';
import { persistenceReducer } from './persistenceReducer';

export interface State {
  counterReducer: CounterState;
}

const combinedReducers = combineReducers<State>({
  counterReducer,
});

export const reducers = (state: any, action: any) => {
  const persistedState = persistenceReducer(state, action);
  return combinedReducers(persistedState, action);
};
