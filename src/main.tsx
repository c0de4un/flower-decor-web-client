import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './redux/rootReducer';
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  const store = configureStore({
    reducer: rootReducer
  });

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
