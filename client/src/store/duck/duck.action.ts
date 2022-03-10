import { IDuck } from "../../../../shared/interfaces";
import { IAction } from "../root/root.actions";
import { IAddDuckArgs, IDeleteDuckArgs } from "./duck.interface";

export enum DuckActionTypes {
  SET_DUCKS_STATE = "SET_DUCKS_STATE",
  GET_DUCKS = "GET_DUCKS",
  ADD_DUCK = "ADD_DUCK",
  DELETE_DUCK = "DELETE_DUCK",
}

export type GetDucksAction = IAction<void>;

export type SetDucksAction = IAction<IDuck[]>;

export type AddDuckAction = IAction<IAddDuckArgs>;

export type DeleteDuckAction = IAction<IDeleteDuckArgs>;

class DuckActions {
  constructor() {}

  public getDucksAction(): GetDucksAction {
    return { type: DuckActionTypes.GET_DUCKS };
  }

  public setDucksAction(ducks: IDuck[]): SetDucksAction {
    return { type: DuckActionTypes.SET_DUCKS_STATE, payload: ducks };
  }

  public addDuckAction(duck: IAddDuckArgs): AddDuckAction {
    return { type: DuckActionTypes.ADD_DUCK, payload: duck };
  }

  public deleteDuckAction(id: IDeleteDuckArgs): DeleteDuckAction {
    return { type: DuckActionTypes.DELETE_DUCK, payload: id };
  }
}

export const duckActions = new DuckActions();
