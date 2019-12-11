export interface IGridPoint {
  intersection: boolean;
  steps: number;
}

export interface IDirection {
  [index: string]: number[];
}

export interface IGrid {
  [index: string]: string;
}
