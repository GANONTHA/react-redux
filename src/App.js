import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>The counter is: {counter}</p>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(4))}>-</button>
      {isLoggedIn && <h4>You are an admin</h4>}
      <button onClick={() => dispatch(signIn())}>
        {isLoggedIn ? "LogOut" : "Login"}
      </button>
    </div>
  );
}

export default App;
