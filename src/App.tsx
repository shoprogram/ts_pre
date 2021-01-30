import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from "./data.json";
import TestComponent from './TestComponent';

type USERS = typeof Data;



const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello"/>
      </header>
    </div>
  );
}

export default App;
