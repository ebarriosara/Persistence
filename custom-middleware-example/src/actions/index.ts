export { incrementCounter } from './incrementCounter';
export { decrementCounter } from './decrementCounter';
export { loadPersistedState } from './loadPersistedState';
export { setCounterValue } from './setCounterValue';
export interface BaseAction {
  type: string;
  payload: any;
}
