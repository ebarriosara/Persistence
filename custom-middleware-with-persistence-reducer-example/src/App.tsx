import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store';
import { Page } from './pages';

const App: React.StatelessComponent<{}> = (props) => {

  return (
    <Provider store={store}>
      <Page>
        {props.children}
      </Page>
    </Provider>
  );
};

export default App;
