import { IDuck } from "../../../../shared/interfaces";

export interface IDuckState {
  ducks: IDuck[];
}

export interface IAddDuckArgs {
  name: string;
  color: string;
}

export interface IDeleteDuckArgs {
  id: any;
}
