import React from "react";

import CounterContext from "./CounterContext/Provider";
import Counter from "./Counter";
import Controls from "./Controls";

import Filter from "./Filter";

function App() {
  return (
    <div className="App">
      <h2>Utilizando a context API e o useReducer hook</h2>
      <CounterContext>
        <Counter />
        <Controls />
      </CounterContext>

      <hr />

      <h2>
        Utilizando os hooks useMemo e useCallback e também a função memo do
        React para memorizar o componente
      </h2>
      <Filter />
    </div>
  );
}

export default App;
