import { typing } from "types2graphql";

export interface Book {
  __kind: typing.TYPE;
  id: string;
  name: string;
  rating: number;
  authors: Author[];
}

export interface Author {
  __kind: typing.TYPE;
  id: string;
  name: string;
  age?: number;
}

export interface Filter {
  __kind: typing.INPUT;
  rating?: number;
}

export interface Response {
  __kind: typing.TYPE;
  books: Book[];
}
