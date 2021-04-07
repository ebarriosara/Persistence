import { actionsEnum } from '../const';
import { BaseAction } from '../actions';

export interface CounterState {
  value: number;
}

const createDefaultState = (): CounterState => (
  {
    value: 0,
  }
);

export const counterReducer = (state: CounterState = createDefaultState(), action: BaseAction): CounterState => {
  switch (action.type) {
    case actionsEnum.INCREMENT_COUNTER:
      return incrementCounter(state);
    case actionsEnum.DECREMENT_COUNTER:
      return decrementCounter(state);
    default:
      return state;
  }
};

const incrementCounter = (state: CounterState): CounterState => (
  {
    ...state,
    value: state.value + 1,
  }
);

const decrementCounter = (state: CounterState): CounterState => (
  {
    ...state,
    value: state.value - 1,
  }
);
