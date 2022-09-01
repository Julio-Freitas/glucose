export type Item = {
  id: string | null;
  date: string | null;
  time: String | null;
  glucose: String | null;
  correction: string | null;
  documentId?: string | null;
  pressure?: string | null
};

export type propsActionsList = {
  onDeleteItem: (documentId: string) => void;
  onEditItem: (item: Item) => void;
};
export type ListItem  = {
  list: Item[];
} & propsActionsList;
