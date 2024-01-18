import React from "react";
import { useSelector } from "react-redux";

const Body = () => {
  const color = useSelector((state) => state.color);
  return (
    <div>
      <h1>Body Component</h1>
      <p style={{ color }}>I am a body component. My text color</p>
    </div>
  );
};

export default Body;
