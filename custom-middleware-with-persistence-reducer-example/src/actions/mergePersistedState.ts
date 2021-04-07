import { actionsEnum } from '../const';
import { State } from '../reducers';

export const mergePersistedState = (state: State) => ({
  type: actionsEnum.MERGE_PERSISTED_STATE,
  payload: state,
});
