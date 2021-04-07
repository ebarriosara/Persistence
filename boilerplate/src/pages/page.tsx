import React from 'react';
import logo from './logo.svg';
import './page.css';
import { Counter } from './components';

export interface PageProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const Page = (props: PageProps) => {
  const { count, increment, decrement } = {...props};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter
          count={count}
          increment={increment}
          decrement={decrement}
        />
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
