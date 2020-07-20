import React from "react";

export enum ActionTypes {
  INCREMENT,
  DECREMENT,
}

export interface IAction {
  type: ActionTypes;
}

export interface IState {
  counter: number;
}

export interface IDispatch {
  (action: IAction): void;
}

export interface IContextDefaultValue {
  state: IState;
  dispatch: IDispatch;
}

export const defaultValue: IContextDefaultValue = {
  state: { counter: 0 },
  dispatch: () => ({
    counter: 0,
  }),
};

const CounterContext = React.createContext(defaultValue);

export default CounterContext;
