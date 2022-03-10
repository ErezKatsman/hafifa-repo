import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import {
  AddDucksEpic,
  getDucksEpic,
  DeleteDuckEpic,
} from "../duck/duck.effect";
import { duckReducer } from "../duck/duck.reducer";
import { helloEpic } from "../hello.epic";
import { IAction } from "./root.actions";
import { IRootState } from "./root.interface";

export const rootEpic = combineEpics<IAction>(
  helloEpic,
  getDucksEpic,
  AddDucksEpic,
  DeleteDuckEpic
);

export const rootReducer = combineReducers<IRootState>({
  duckState: duckReducer,
});
