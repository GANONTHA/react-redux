import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, incrementBy } from "./redux/counter";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>Counter is: {count} for now</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementBy(10))}>IncrementBy 10</button>
    </div>
  );
}

export default App;
