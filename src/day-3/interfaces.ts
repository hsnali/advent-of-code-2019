export interface IPath {
  direction: string;
  vector: number;
}

export interface IDirection {
  [index: string]: number[];
}

export interface IGrid {
  [index: string]: string;
}
