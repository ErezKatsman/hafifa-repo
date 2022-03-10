export interface IAction<T = any> {
  type: string;
  payload?: T;
}

export enum RootActionTypes {
  NULL = "NULL",
  PRINT = "PRINT",
}

export type NullAction = IAction<void>;

export const nullAction = (): NullAction => {
  return {
    type: RootActionTypes.NULL,
  };
};

export type PrintAction = IAction<void>;
export const printAction = (): PrintAction => {
  return {
    type: RootActionTypes.PRINT,
  };
};
