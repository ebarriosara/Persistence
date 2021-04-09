import { useContext } from 'react';
import logo from './logo.svg';
import './page.css';
import { Counter } from './components';
import { PersistenceContext, PersistenceContextType } from '../persistenceProvider';

export const Page = () => {
  
  const { state, dispatch } = useContext<PersistenceContextType>(PersistenceContext);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter count={state.count} dispatch={dispatch}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>          
        </span>
      </header>
    </div>
  );
}
