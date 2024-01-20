import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementBy } from "../redux/counter";

const CounterApp = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter App</h1>
      <h2>The count is: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementBy(5))}>Increment by 5</button>
    </div>
  );
};

export default CounterApp;
