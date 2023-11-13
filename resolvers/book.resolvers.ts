import { Filter } from "../interfaces/book.interface.js";
import { books } from "../stores/book.store.js";

export const resolvers = {
  Query: {
    book: (_, { input }: { input: Filter }) => {
      return {
        books: books.filter((book) => book.rating === input.rating),
      };
    },
  },
};

export default resolvers;
