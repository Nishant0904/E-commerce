// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store'; // Import the store
import App from './App';
import './index.css';

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
