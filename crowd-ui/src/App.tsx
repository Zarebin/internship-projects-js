import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import AppAllRoutes from './app/routes'

function App() {
  return (
    <div>
      <AppAllRoutes/>
    </div>
  );
}

export default App;
