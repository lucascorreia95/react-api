export type Item = {
  id: number;
  title: string;
  body: string;
};

export type ListPostsProps = {
  list: Item[];
  filter: string;
};
