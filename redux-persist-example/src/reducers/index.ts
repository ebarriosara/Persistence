import { combineReducers } from 'redux';
import { CounterState, counterReducer } from './counterReducer';

export interface State {
  counterReducer: CounterState;
}

export const reducers = combineReducers<State>({
  counterReducer,
});
