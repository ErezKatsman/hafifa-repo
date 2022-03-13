import apollo from "../../utils/apollo-client";
import { addDuckGql, getAllDucksGql, deleteDuck } from "./duck.gql";

class DuckService {
  constructor() {}

  public async getAllDucks() {
    const { query } = getAllDucksGql;
    try {
      const { data } = await apollo.query({ query });
      return data.ducks;
    } catch (err) {
      console.error(err);
    }
  }

  public async addDuck(name: string, color: string) {
    const { mutation } = addDuckGql;
    try {
      await apollo.mutate({
        mutation,
        variables: { duckInput: { name, color } },
      });
    } catch (err) {
      console.log(err);
    }
  }

  public async deleteDuck(id: string) {
    const { mutation } = deleteDuck;
    try {
      await apollo.mutate({
        mutation,
        variables: { id },
      });
    } catch (err) {
      console.log({ id });
      console.log(err);
    }
  }
}

export const duckService = new DuckService();
