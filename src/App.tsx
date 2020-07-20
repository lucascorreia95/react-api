import React from "react";

import CounterContext from "./CounterContext/Provider";

import Counter from "./Counter";
import Controls from "./Controls";

function App() {
  return (
    <CounterContext>
      <div className="App">
        <Counter />
        <Controls />
      </div>
    </CounterContext>
  );
}

export default App;
