import React, { useMemo } from "react";

import filterListByTitle from "../../utils/filterListByTitle";

import { ListPostsProps } from "../types";

const ListPosts: React.FC<ListPostsProps> = ({ list, filter }) => {
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

export default ListPosts;
