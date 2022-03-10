import { IRootState } from "../root/root.interface";

class DuckSelectors {
  public duckStateSelector(state: IRootState) {
    return state.duckState;
  }
  public allducksSelector(state: IRootState) {
    return this.duckStateSelector(state).ducks;
  }
}

export const duckSelector = new DuckSelectors();
