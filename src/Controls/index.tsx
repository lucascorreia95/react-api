import React from "react";

export const Controls = ({ increment = () => {}, decrement = () => {} }) => {
  return (
    <div>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default Controls;
