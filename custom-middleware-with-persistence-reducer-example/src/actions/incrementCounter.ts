import { actionsEnum } from '../const';

export const incrementCounter = () => ({
  type: actionsEnum.INCREMENT_COUNTER,
  payload: Date.now(),
});
