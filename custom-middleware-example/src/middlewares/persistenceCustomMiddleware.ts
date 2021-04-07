import { setCounterValue } from '../actions';
import { actionsEnum } from '../const';
import { saveState, loadState } from '../localStorage';

const buildKey = (): string => `CounterApp`;

const buildStateToSave = (store: any) => ({
  counterReducer: store.getState().counterReducer,
});

export const persistenceCustomMiddleware = (store: any) => (next: any) => (action: any) => {
  next(action);

  switch (action.type) {
    case actionsEnum.INCREMENT_COUNTER:
      // Save state to local storage        
      saveState(buildKey(), buildStateToSave(store));
      break;
    case actionsEnum.DECREMENT_COUNTER:
      // Save state to local storage 
      saveState(buildKey(), buildStateToSave(store));
      break;
    case actionsEnum.LOAD_PERSISTED_STATE:
      // Read state from local storage
      const persistedState = loadState(buildKey());
      console.log(persistedState.counterReducer.value);
      if (persistedState != null) {
        // Dispatch action to update current state using the persisted information
        store.dispatch(setCounterValue(persistedState.counterReducer.value));
      }
      break;
  }
};
