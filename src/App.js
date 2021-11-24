import React from 'react';
import './style.css';

import { configureStore } from '@reduxjs/toolkit';

const initialState = { value: 0 };
function reducer(state = initialState, action) {
  if (action.type === 'counter/PLUS_ONE') {
    return {
      ...state,
      value: state.value + 1,
    };
  }
  if (action.type === 'counter/MINUS_TWO') {
    return {
      ...state,
      value: state.value - 2,
    };
  }
}

const store = configureStore({ reducer });

store.dispatch('counter/PLUS_ONE');
console.log(store.getState());

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
