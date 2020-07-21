import React, { useEffect, useState, useCallback } from "react";

import { Item } from "./types";
import ListPosts from "./ListPosts";
import MemoComponent from "./Memo";

export const Filter = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<Item[]>([]);
  const [count, setCount] = useState(0);

  // useCallback to memorize the function reference
  const getDataFromApi = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return setList(data);
  }, []);

  useEffect(() => {
    getDataFromApi();
  }, [getDataFromApi]);

  return (
    <div>
      <MemoComponent />
      <h3>Count</h3>
      <div>
        <span>Contador: {count}</span>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Incrementar
        </button>
      </div>
      <h3>Filter</h3>
      <input
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
      />
      <ListPosts list={list} filter={inputValue} />
    </div>
  );
};

export default Filter;
