export enum Colors {
  red = "red",
  blue = "blue",
  black = "black",
  white = "white",
  yellow = "yellow",
}

export interface IDuck {
  id: number;
  name: string;
  color: Colors;
}
