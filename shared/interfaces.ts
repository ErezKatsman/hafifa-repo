export enum Colors {
  red = "red",
  blue = "blue",
  black = "black",
  white = "white",
  yellow = "yellow",
}

export interface IDuck {
  id: string;
  name: string;
  color: Colors;
}
