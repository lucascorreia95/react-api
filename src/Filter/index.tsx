import React, { useEffect, useState, useCallback, useMemo, memo } from "react";

type Item = {
  id: number;
  title: string;
  body: string;
};

type ListPostsProps = {
  list: Item[];
  filter: string;
};

const filterListByTitle = (list: Item[], filter: string): Item[] => {
  console.log("Filter list by title function!");
  return list.filter(({ title }) => title.includes(filter.toLowerCase()));
};

const ListPosts: React.FC<ListPostsProps> = ({ list, filter }) => {
  console.log("List posts component");

  //useMemo to memorize the return of function, execute only when the dependencies change
  const filteredList = useMemo(() => filterListByTitle(list, filter), [
    filter,
    list,
  ]);

  return (
    <ul>
      {filteredList.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
};

const MemoComponent = memo(() => {
  console.log("Memo Component render!");

  return <h3>Memo Component!</h3>;
});

export const Filter = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<Item[]>([]);
  const [count, setCount] = useState(0);

  console.log("Filter component");

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
