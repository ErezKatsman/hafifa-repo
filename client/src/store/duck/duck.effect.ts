import { Observable, tap, map, mergeMap, pluck } from "rxjs";
import { ofType } from "redux-observable";
import {
  AddDuckAction,
  DeleteDuckAction,
  duckActions,
  DuckActionTypes,
  GetDucksAction,
  SetDucksAction,
} from "./duck.action";
import { duckService } from "./duck.service";
import { IAddDuckArgs, IDeleteDuckArgs } from "./duck.interface";

export const getDucksEpic = (
  action$: Observable<GetDucksAction>
): Observable<SetDucksAction> => {
  return action$.pipe(
    ofType(DuckActionTypes.GET_DUCKS),
    mergeMap(() => duckService.getAllDucks()),
    map((ducks) => {
      return duckActions.setDucksAction(ducks);
    })
  );
};

export const AddDucksEpic = (
  action$: Observable<AddDuckAction>
): Observable<GetDucksAction> => {
  return action$.pipe(
    ofType(DuckActionTypes.ADD_DUCK),
    pluck("payload"),
    mergeMap((payload: IAddDuckArgs) =>
      duckService.addDuck(payload.name, payload.color)
    ),
    map(() => duckActions.getDucksAction())
  );
};

export const DeleteDuckEpic = (
  action$: Observable<DeleteDuckAction>
): Observable<GetDucksAction> => {
  return action$.pipe(
    ofType(DuckActionTypes.DELETE_DUCK),
    pluck("payload"),
    mergeMap((payload: IDeleteDuckArgs) => duckService.deleteDuck(payload.id)),
    map(() => duckActions.getDucksAction())
  );
};

const cases = `
camelCase
PascalCase
kebab-case
snake_case
SCREAMING_SNAKE_CASE
`
