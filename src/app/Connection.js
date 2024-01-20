import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/connection";

const Connection = () => {
  const { user } = useSelector((state) => state.userC);
  return (
    <>
      <h1>Connection</h1>
      {user === null ? <Login /> : <LogOut />}
    </>
  );
};

//Login component
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const dispatch = useDispatch();

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ name, email, password, loggedIn: true }));
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter a password"
          value={password}
          onChange={(e) => setPassord(e.target.value)}
        />
        <button type="submit" disabled={!name || !password || !email}>
          Login
        </button>
      </form>
    </>
  );
};

//Logout component

const LogOut = () => {
  const { user } = useSelector((state) => state.userC);

  const dispatch = useDispatch();
  return (
    <>
      <h1>Welcome {user.name}!</h1>
      <button type="submit" onClick={() => dispatch(logout())}>
        LogOut
      </button>
      <p style={{ fontSize: 17 }}>Your email is: {user.email}</p>
    </>
  );
};
export default Connection;
