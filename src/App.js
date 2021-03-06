import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">Counter Apps</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;
