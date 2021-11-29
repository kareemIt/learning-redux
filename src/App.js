import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../components/redux';

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>value is {count}!</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>dercement</button>
    </div>
  );
}
