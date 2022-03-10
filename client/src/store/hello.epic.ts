import { ofType } from "redux-observable";
import { map, Observable, tap } from "rxjs";
import { IAction, nullAction, RootActionTypes } from "./root/root.actions";

export const helloEpic = (
  action$: Observable<IAction>
): Observable<IAction> => {
  return action$.pipe(
    ofType(RootActionTypes.PRINT),
    tap(({ type }) => console.log(type)),
    map(() => nullAction())
  );
};
