import { gql } from "@apollo/client";

export const getAllDucksGql = {
  query: gql`
    query getDucks {
      ducks {
        id
        name
        color
      }
    }
  `,
};

export const addDuckGql = {
  mutation: gql`
    mutation addDuck($duckInput: DuckInput!) {
      addDuck(duckInput: $duckInput) {
        id
        name
        color
      }
    }
  `,
};

export const deleteDuck = {
  mutation: gql`
    mutation DeleteDuck($id: Int!) {
      deleteDuck(id: $id) {
        id
        name
        color
      }
    }
  `,
};
