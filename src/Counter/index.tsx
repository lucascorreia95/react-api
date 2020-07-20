import React from "react";

import useCounter from "../CounterContext/useCounter";

export const Counter = () => {
  const { state } = useCounter();

  return <span>Valor: {state.counter}</span>;
};

export default Counter;
