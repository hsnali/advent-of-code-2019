import { IDirection } from './interfaces';

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

export const mapPath = (path: string) => {
  const map = new Map();
  const paths: string[] = path.split(',');
  let x0 = 0;
  let y0 = 0;
  let stepCounter = 0;

  paths.forEach(current => {
    const [direction, vector] = convertPath(current);
    const [xMove, yMove] = directions[direction];
    let x1 = x0;
    let y1 = y0;

    for (let i = 0; i < vector; i++) {
      x1 += xMove;
      y1 += yMove;
      stepCounter += 1;

      if (!map.has(`${x1},${y1}`)) {
        map.set(`${x1},${y1}`, stepCounter);
      }
    }

    x0 = x1;
    y0 = y1;
  });

  return map;
};

export const getIntersections = (
  map1: Map<string, number>,
  map2: Map<string, number>
): string[] => {
  const intersections: string[] = [];

  for (let key of map1.keys()) {
    if (map2.has(key)) intersections.push(key);
  }

  return intersections;
};

export const addDistances = (points: string) => {
  const [x, y] = points.split(',').map(p => +p);
  return Math.abs(x) + Math.abs(y);
};

export const getManhattanDistance = (coordinates: string[]) => {
  const distances = coordinates.map(addDistances);
  const lowest = Math.min.apply(Math, distances);
  return lowest;
};

export const getClosestIntersection = (
  map1: Map<string, number>,
  map2: Map<string, number>,
  intersections: string[]
): number => {
  const crossPoints: number[] = [];

  intersections.forEach(point => {
    crossPoints.push(map1.get(point) + map2.get(point));
  });

  return Math.min.apply(Math, crossPoints);
};
