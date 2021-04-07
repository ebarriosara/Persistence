export { incrementCounter } from './incrementCounter';
export { decrementCounter } from './decrementCounter';
export * from './persistence';
export interface BaseAction {
  type: string;
  payload: any;
}
