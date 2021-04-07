import isEmpty from 'lodash-es/isEmpty';

export const loadState = (key: string) => {
  const serializedState = localStorage.getItem(key);
  try {
    if (serializedState == null) {
      return null;
    }
    if (typeof JSON.parse(serializedState) === 'object') {
      return JSON.parse(serializedState);
    } else {
      return null;
    }

  } catch (err) {
    return serializedState;
  }
};

export const saveState = (key: string, state: any) => {
  try {
    if (!isEmpty(key)) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  } catch (err) {
  }
};
