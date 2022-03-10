import { IAction } from "../root/root.actions";
import { IDuckState } from "../duck/duck.interface";
import { initDuckState } from "../duck/duck.init";
import { DuckActionTypes, SetDucksAction } from "./duck.action";

export function duckReducer(
  state: IDuckState = initDuckState,
  action: IAction<any>
): IDuckState {
  switch (action.type) {
      case DuckActionTypes.SET_DUCKS_STATE: 
        const setducksAction = (action as SetDucksAction);
        const ducks = setducksAction.payload || [] 
        return {...state, ducks}
    default:
      return state;
  }
}
