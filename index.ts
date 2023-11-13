import express from "express";
import { graphqlHTTP } from "express-graphql";
import { readFileSync } from "fs";
import resolvers from "./resolvers/book.resolvers.js";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { generateGraphQLSchema } from "types2graphql";
import path from "path";

const port = 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
});

// call converter library here
generateGraphQLSchema(path.join(process.cwd(), "interfaces"), "book");
const schemaSdl =
  readFileSync("interfaces/book.graphql", "utf-8") +
  "\n" +
  readFileSync("resolver.graphql", "utf-8");
console.log(schemaSdl);

export const schema = makeExecutableSchema({ typeDefs: schemaSdl, resolvers });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log("====================================");
  console.log(`now listening on this port: ${port}`);
  console.log(`Running a GraphQL API server at http://localhost:8000/graphql`);
  console.log("====================================");
});
