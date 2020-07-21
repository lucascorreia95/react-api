import { Item } from "../../Filter/types";

export const filterListByTitle = (list: Item[], filter: string): Item[] => {
  console.log("Filter list by title function!");
  return list.filter(({ title }) => title.includes(filter.toLowerCase()));
};

export default filterListByTitle;
