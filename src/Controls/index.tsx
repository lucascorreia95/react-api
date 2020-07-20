import React from "react";

import useCounter from "../CounterContext/useCounter";
import { ActionTypes } from "../CounterContext/types";

export const Controls = () => {
  const { dispatch } = useCounter();

  const handleControl = (type: ActionTypes) => {
    dispatch({
      type: type,
    });
  };

  return (
    <div>
      <button onClick={() => handleControl(ActionTypes.INCREMENT)}>
        Incrementar
      </button>
      <button onClick={() => handleControl(ActionTypes.DECREMENT)}>
        Decrementar
      </button>
    </div>
  );
};

export default Controls;
