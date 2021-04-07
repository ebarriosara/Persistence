import { isValidNumber } from '../../api';
import { State } from '../../reducers';
import { mergePersistedState } from './mergePersistedState';

export const validatePersistedState = (state: State) => (dispatcher: any) => {
  isValidNumber(state.counterReducer.value).then(
    result => {
      if (result) {
        dispatcher(mergePersistedState(state));
      } else {
        window.alert(`Persisted state is not valid. Default state is used.`);
      }
    }
  );
};
