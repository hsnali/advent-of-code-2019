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

export const mapPath = (
  path: string,
  grid: IGrid = {},
  marker = '-',
  saveSteps = false
) => {
  const paths: string[] = path.split(',');
  let x0 = 0;
  let y0 = 0;
  let stepCounter = 0;

  paths.forEach((current, index) => {
    const [direction, vector] = convertPath(current);
    const [xMove, yMove] = directions[direction];
    let x1 = x0;
    let y1 = y0;

    for (let i = 0; i < vector; i++) {
      x1 += xMove;
      y1 += yMove;
      stepCounter += 1;

      let contents = grid[`${x1}_${y1}`] || marker;

      if (!saveSteps) {
        grid[`${x1}_${y1}`] =
          contents !== marker ? `${contents}${marker}` : `${contents}`;
      } else {
        // get previous mark and steps to point
        let [mark, steps = 0] = contents.split('_');

        // if its a different wire add both steps by wires to this point
        if (mark && mark !== marker) {
          let totalSteps = stepCounter + +steps;
          grid[`${x1}_${y1}`] = `${mark}${marker}_${totalSteps}`;
        } else {
          // otherwise same wire, ignore secondary steps to this point
          let totalSteps = steps !== 0 ? steps : stepCounter;
          grid[`${x1}_${y1}`] = `${contents}_${totalSteps}`;
        }
      }
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

export const getClosestIntersection = (paths: IGrid): number => {
  const steps = Object.values(paths)
    .filter(current => {
      const [point] = current.split('_');
      if (point.length > 1) return true;
      return;
    })
    .map(point => parseInt(point.split('_')[1], 10));
  const closest = Math.min.apply(Math, steps);

  return closest;
};
