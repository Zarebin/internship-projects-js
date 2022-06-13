import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import configureAppStore from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import messages from './lang/messages';

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

reportWebVitals();
