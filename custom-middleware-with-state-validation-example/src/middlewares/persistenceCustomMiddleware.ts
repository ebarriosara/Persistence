import { validatePersistedState } from '../actions';
import { actionsEnum } from '../const';
import { saveState, loadState } from '../localStorage';

const buildKey = (): string => 'CounterApp';

const buildStateToSave = (store: any) => ({
  counterReducer: store.getState().counterReducer,
});

export const persistenceCustomMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);

  switch (action.type) {
    case actionsEnum.INCREMENT_COUNTER:
    case actionsEnum.DECREMENT_COUNTER:
      // Save state to local storage        
      saveState(buildKey(), buildStateToSave(store));
      break;
    case actionsEnum.LOAD_PERSISTED_STATE:
      // Read state from local storage
      const persistedState = loadState(buildKey());
      if (persistedState != null) {
        // Dispatch action to validate the state. This action will dispatch the merge action.
        validatePersistedState(persistedState)(store.dispatch);
      }
      break;
  }

  return result;
};
