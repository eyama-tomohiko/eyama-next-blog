type Maybe<T> = T | null;

type ListResponse<T> = {
  json(): unknown;
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

type ItemResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

type Image = {
  fieldId: "image";
  url: string;
  width: number;
  height: number;
  text: string;
};

type Blog = ItemResponse & {
  title: string;
  image: Image;
  text: string;
};
