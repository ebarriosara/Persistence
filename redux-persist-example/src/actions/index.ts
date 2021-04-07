export { incrementCounter } from './incrementCounter';
export { decrementCounter } from './decrementCounter';
export interface BaseAction {
  type: string;
  payload: any;
}
