export type ListProps = {
  params: {
    id: string;
    title: string;
  };
};

export type ListItem = {
  id: string;
  itemName: string;
  isBought: boolean;
  createdAt: string;
  updatedAt: string;
  listId: string;
};
