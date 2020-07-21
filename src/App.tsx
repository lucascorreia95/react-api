import React from "react";

import CounterContext from "./CounterContext/Provider";
import Counter from "./Counter";
import Controls from "./Controls";

import Filter from "./Filter";

function App() {
  return (
    <div className="App">
      <CounterContext>
        <Counter />
        <Controls />
      </CounterContext>

      <hr />

      <Filter />
    </div>
  );
}

export default App;
