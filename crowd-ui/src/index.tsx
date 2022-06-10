import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureAppStore from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const { store } = configureAppStore();
const root = document.getElementById('root')!;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  root,
);

reportWebVitals();
