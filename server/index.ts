import { ApolloServer, gql } from "apollo-server";
import { IDuck, Colors } from "./shared/interfaces";

const ducks: IDuck[] = [
  { id: 1, name: "Erez", color: Colors.red },
  { id: 2, name: "Alon", color: Colors.blue },
  { id: 3, name: "Omer", color: Colors.black },
  { id: 4, name: "Roni", color: Colors.white },
];

interface IDuckByIdArgs {
  id: number;
}

interface IAddDuckArgs {
  duckInput: {
    name: string;
    color: Colors;
  };
}

interface ISetDuckArgs {
  id: number;
  duckInput: {
    id: number;
    name: string;
    color: Colors;
  };
}

const resolvers = {
  Query: {
    ducks: () => ducks,
    duckById: (_: any, { id }: IDuckByIdArgs) =>
      ducks.find((duck) => duck.id === id),
  },
  Mutation: {
    addDuck: (_: any, { duckInput }: IAddDuckArgs) => {
      const id = ducks[ducks.length - 1].id + 1;
      const newDuck: IDuck = { id, ...duckInput };
      ducks.push(newDuck);
      return newDuck;
    },
    setDuck: (_: any, { id, duckInput }: ISetDuckArgs) => {
      const i = ducks.findIndex((duck) => duck.id === id);
      if (i === -1) throw new Error("Duck not found");
      const oldDuck = ducks[i];
      const newDuck = {
        ...oldDuck,
        ...duckInput,
      };
      ducks[i] = newDuck;
      return newDuck;
    },
    deleteDuck: (_: any, { id }: IDuckByIdArgs) => {
      const index = ducks.findIndex((duck) => duck.id === id);
      const duckDeleted = ducks[index];
      if (index > -1) {
        ducks.splice(index, 1);
      }
      return duckDeleted;
    },
  },
};

const typeDefs = gql`
  input DuckInput {
    name: String!
    color: String = "yellow"
  }

  type Duck {
    id: Int
    name: String
    color: String
  }

  type Query {
    ducks: [Duck]
  }

  type Query {
    duckById(id: Int!): Duck
  }

  type Mutation {
    addDuck(duckInput: DuckInput!): Duck
  }

  type Mutation {
    setDuck(id: Int!, duckInput: DuckInput!): Duck
  }

  type Mutation {
    deleteDuck(id: Int!): Duck
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
