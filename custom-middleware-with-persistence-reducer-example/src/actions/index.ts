export { incrementCounter } from './incrementCounter';
export { decrementCounter } from './decrementCounter';
export { loadPersistedState } from './loadPersistedState';
export { mergePersistedState } from './mergePersistedState';
export interface BaseAction {
  type: string;
  payload: any;
}
