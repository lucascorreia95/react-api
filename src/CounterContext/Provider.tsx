import React, { FC, useReducer } from "react";

import { IState, IAction, ActionTypes } from "./types";
import CounterContext from "./Context";

const defaultValue: IState = { counter: 0 };

export const Provider: FC = ({ children }) => {
  function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
      case ActionTypes.INCREMENT:
        return { counter: state.counter + 1 };
      case ActionTypes.DECREMENT:
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
