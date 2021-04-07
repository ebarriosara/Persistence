import { actionsEnum } from '../const';

export const setCounterValue = (value: number) => ({
  type: actionsEnum.SET_COUNTER_VALUE,
  payload: value,
});
