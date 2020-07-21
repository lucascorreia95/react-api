import React, { useEffect, useState, useCallback } from "react";

type Item = {
  id: number;
  title: string;
  body: string;
};

type ListPostsProps = {
  list: Item[];
  filter: string;
};

const ListPosts: React.FC<ListPostsProps> = ({ list, filter }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
};

export const Filter = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<Item[]>([]);

  //useCallback to memorize the function reference
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
