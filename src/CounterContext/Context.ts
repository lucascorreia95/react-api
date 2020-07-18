import React from "react";

export interface IContextDefaultValue {
  counter: number;
}

export const defaultValue: IContextDefaultValue = { counter: 0 };

const CounterContext = React.createContext();

export default CounterContext;
