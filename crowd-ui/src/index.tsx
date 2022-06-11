import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import configureAppStore from './app/store';
import App from './App';
import messages from './lang/messages';
import reportWebVitals from './reportWebVitals';
import './index.css';

const { store } = configureAppStore();
const root = document.getElementById('root')!;
const locale = 'fa-IR';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <App />
        </IntlProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  root,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
