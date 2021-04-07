import { actionsEnum } from '../const';

export const decrementCounter = () => ({
  type: actionsEnum.DECREMENT_COUNTER,
  payload: Date.now(),
});
