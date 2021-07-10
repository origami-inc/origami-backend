import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import express from "express";
import { createConnection } from "typeorm";
import { UserResolver } from "./resolver/userResolver";

const initializeDB = async (): Promise<void> => {
  try {
    await createConnection();
    console.log("Database successfully initialized");
  } catch (error) {
    console.log(`Database failed to connect ${error.message}`);
  }
};

const app = express();

async function runServer() {
  await initializeDB();
  const schema = await buildSchema({
    resolvers: [UserResolver],
    container: Container,
    emitSchemaFile: true
  });
  const server = new ApolloServer({
    schema
  });

  server.applyMiddleware({ app });

  const port = process.env.PORT || 5000;

  app.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}/graphql`)
  );
}

runServer();
