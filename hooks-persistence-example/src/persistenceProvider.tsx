import { createContext, useEffect, useReducer } from 'react';
import { loadState, saveState } from './localStorage';
import { countReducer, initialState } from './reducers';

export interface PersistenceContextType {
  state: { count: number };
  dispatch: ({ type }: { type: string }) => void;
}

const createDefaultContext = () => ({ state: { count: 0 }, dispatch: () => {}});

export const PersistenceContext = createContext<PersistenceContextType>(createDefaultContext());

const buildKey = (): string => `HookCounterApp`;

const buildStateToSave = (state: { count: number }) => ({
  count: state.count,
});

const countReducerInitializer = () => {
  return loadState(buildKey()) || initialState;
}

export const PersistenceProvider = ({ children }: { children: JSX.Element }) => {

  const [state, dispatch] = useReducer(countReducer, initialState, countReducerInitializer);

  useEffect(() => {
    saveState(buildKey(), buildStateToSave(state));
  }, [state]);

  return (
    <PersistenceContext.Provider
      value={{ state, dispatch }}  
    >
      {children}
    </PersistenceContext.Provider>
  );
};
