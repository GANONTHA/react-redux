import React from "react";
import { changeToBlue } from "../features/color/colorSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Header Component</h1>
      <button onClick={() => dispatch(changeToBlue())}>Change to blue</button>
    </div>
  );
};

export default Header;
