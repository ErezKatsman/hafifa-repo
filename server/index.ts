import { ApolloServer, gql } from "apollo-server";
import mongoose from "mongoose";
import { IDuck, Colors } from "./shared/interfaces";
import { Duck } from "./models/Duck";

const ducks: IDuck[] = [
  { id: 1, name: "Erez", color: Colors.red },
  { id: 2, name: "Alon", color: Colors.blue },
  { id: 3, name: "Omer", color: Colors.black },
  { id: 4, name: "Roni", color: Colors.white },
];

interface IDuckByIdArgs {
  id: string;
}

interface IAddDuckArgs {
  duckInput: {
    name: string;
    color: Colors;
  };
}

interface ISetDuckArgs {
  id: string;
  duckInput: {
    name: string;
    color: Colors;
  };
}

const resolvers = {
  Query: {
    ducks: async () => await Duck.find(),
    duckById: async (_: any, { id }: IDuckByIdArgs) => {
      console.log(typeof id);
      return await Duck.findById(id);
    },
  },
  Mutation: {
    addDuck: async (_: any, { duckInput }: IAddDuckArgs) => {
      const newDuck = new Duck({
        name: duckInput.name,
        color: duckInput.color,
      });
      await newDuck.save();
      return newDuck;
    },
    setDuck: async (_: any, { id, duckInput }: ISetDuckArgs) => {
      await Duck.findByIdAndUpdate(id, duckInput);
      return await Duck.findById(id);
    },
    deleteDuck: async (_: any, { id }: IDuckByIdArgs) => {
      return await Duck.findByIdAndDelete(id);
    },
  },
};

const typeDefs = gql`
  input DuckInput {
    name: String!
    color: String = "yellow"
  }

  type Duck {
    id: ID!
    name: String
    color: String
  }

  type Query {
    ducks: [Duck!]!
  }

  type Query {
    duckById(id: String!): Duck
  }

  type Mutation {
    addDuck(duckInput: DuckInput!): Duck
  }

  type Mutation {
    setDuck(id: String!, duckInput: DuckInput!): Duck
  }

  type Mutation {
    deleteDuck(id: String!): Duck
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// "mongodb://localhost/testdb" ==> local
mongoose
  .connect("mongodb://mongodb:27017/docker-node-mongo")
  .then(() => console.log("mongoDB conncted"))
  .catch((err) => console.log(err));
