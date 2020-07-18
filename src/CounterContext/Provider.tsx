import React, { FC, useReducer } from "react";
import CounterContext, { IContextDefaultValue, defaultValue } from "./Context";

interface IAction {
  type: string;
}

export const Provider: FC = ({ children }) => {
  function reducer(
    state: IContextDefaultValue,
    action: IAction
  ): IContextDefaultValue {
    switch (action.type) {
      case "increment":
        return { counter: state.counter + 1 };
      case "decrement":
        return { counter: state.counter - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, defaultValue);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default Provider;
