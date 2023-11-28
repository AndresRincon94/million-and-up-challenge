import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import setupStore from './stores/root.store';
import DefaultRouter from './DefaultRouter';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <BrowserRouter>
        <App />
        <DefaultRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
