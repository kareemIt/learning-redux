import React from 'react';
import ReactDOM from 'react-dom';
import { counterReducer } from '../components/redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';

const store = configureStore({ reducer: { counter: counterReducer } });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
