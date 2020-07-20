import React from "react";

import { IContextDefaultValue } from "./types";

export const defaultValue: IContextDefaultValue = {
  state: { counter: 0 },
  dispatch: () => ({
    counter: 0,
  }),
};

const CounterContext = React.createContext(defaultValue);

export default CounterContext;
