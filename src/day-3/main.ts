import { IGrid, IDirection } from './interfaces';

const directions: IDirection = {
  U: [0, 1],
  D: [0, -1],
  L: [-1, 0],
  R: [1, 0]
};

export const convertPath = (path: string): (string | number)[] => {
  const [, direction, vector] = path.split(/([A-Z])/);
  return [direction, +vector];
};

export const mapPath = (path: string, grid: IGrid = {}, marker = '-') => {
  const pathSteps: string[] = path.split(',');
  let x0 = 0;
  let y0 = 0;

  pathSteps.forEach((step, index) => {
    const [direction, vector] = convertPath(step);
    const [xMove, yMove] = directions[direction];
    let x1 = x0;
    let y1 = y0;

    for (let i = 0; i < vector; i++) {
      x1 += xMove;
      y1 += yMove;
      let contents = grid[`${x1}_${y1}`] || marker;
      grid[`${x1}_${y1}`] =
        contents !== undefined && contents !== marker
          ? contents + marker
          : contents;
    }

    x0 = x1;
    y0 = y1;
  });

  return grid;
};

export const getIntersections = (grid: IGrid = {}): number[][] =>
  Object.keys(grid).reduce((intersections, current) => {
    if (grid[current].length === 1) return intersections;
    const [x, y] = current.split('_');
    return [...intersections, [+x, +y]];
  }, []);

export const addDistances = (point: number[]) =>
  point.reduce((total, current) => Math.abs(current) + total, 0);

export const getManhattanDistance = (coordinates: number[][]) => {
  const distances = coordinates.map(addDistances);
  const lowest = Math.min.apply(Math, distances);
  return lowest;
};
