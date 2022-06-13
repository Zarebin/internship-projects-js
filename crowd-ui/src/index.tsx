import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import configureAppStore from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import messages from './lang/messages';

const { store } = configureAppStore();

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
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
