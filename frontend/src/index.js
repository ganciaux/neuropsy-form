import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import ConfirmGlobal from './components/Confirm/ConfirmGlobal';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfirmGlobal />
      <App />
    </Provider>
  </React.StrictMode>,
);
