import React from 'react';

import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { Page } from './pages';

const App: React.FunctionComponent<{}> = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Page>
          {props.children}
        </Page>
      </PersistGate>
    </Provider>
  );
};

export default App;
