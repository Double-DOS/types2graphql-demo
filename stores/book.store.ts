import { typing } from "types2graphql";
import { Author, Book } from "../interfaces/book.interface.js";

const author1: Author = {
  __kind: typing.TYPE,
  id: "1",
  name: "Tony Stark",
  age: 24,
};

const author2: Author = {
  __kind: typing.TYPE,
  id: "2",
  name: "Steve Rogers",
};

export const books: Book[] = [
  {
    __kind: typing.TYPE,
    id: "1",
    name: "Captain America",
    rating: 5,
    authors: [author1, author2],
  },
  {
    __kind: typing.TYPE,
    id: "2",
    name: "Captain Marvel",
    rating: 4,
    authors: [author1],
  },
  {
    __kind: typing.TYPE,
    id: "3",
    name: "Avengers: Endgame",
    rating: 3,
    authors: [author1, author2],
  },
  {
    __kind: typing.TYPE,
    id: "4",
    name: "Guardians Of The Galaxy",
    rating: 3,
    authors: [author1],
  },
  {
    __kind: typing.TYPE,
    id: "5",
    name: "Thor: Ragnarok",
    rating: 5,
    authors: [author2],
  },
];
