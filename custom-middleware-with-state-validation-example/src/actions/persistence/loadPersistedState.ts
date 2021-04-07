import { actionsEnum } from '../../const';

export const loadPersistedState = () => ({
  type: actionsEnum.LOAD_PERSISTED_STATE,
  payload: Date.now(),
});
