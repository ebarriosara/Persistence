import { State } from '.';
import { BaseAction } from '../actions';
import { actionsEnum } from '../const';

export const persistenceReducer = (state: State, action: BaseAction) => {
  switch (action.type) {
    case actionsEnum.MERGE_PERSISTED_STATE:
      return mergePersistedState(state, action.payload);
    default:
      return state;
  }
};

const mergePersistedState = (state: State, persistedState: State): State => ({
  ...state,
  counterReducer: persistedState.counterReducer,
});
