interface IPath {
  direction: string;
  vector: number;
}

interface IDirection {
  [index: string]: number[];
}

const directions: IDirection = {
  U: [0, 1],
  D: [0, -1],
  L: [-1, 0],
  R: [1, 0]
};

export const getPathMove = (path: string): number[] => {
  const [, direction, vector] = path.split(/([A-Z])/);

  return directions[direction];
};

export const convertPath = (path: string): IPath => {
  const [, direction, vector] = path.split(/([A-Z])/);

  return { direction, vector: +vector };
};

export const mapPath = (path: string, grid = {}, marker = '-') => {
  const pathSteps: string[] = path.split(',');
  let x0 = 0;
  let y0 = 0;

  pathSteps.forEach((step, index) => {
    const { direction, vector } = convertPath(step);
    const [xMove, yMove] = directions[direction];
    let x1 = x0;
    let y1 = y0;

    for (let i = 0; i < vector; i++) {
      x1 += xMove;
      y1 += yMove;
      //@ts-ignore
      let contents = grid[`${x1}_${y1}`] || marker;
      // console.log('contents', contents);

      //@ts-ignore
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

export const getIntersections = (grid = {}): number[][] => {
  let v = Object.keys(grid).reduce((intersections, current) => {
    //@ts-ignore
    // console.log('current', current, grid[current]);

    //@ts-ignore
    if (grid[current].length === 1) return intersections;
    //@ts-ignore
    const item = grid[current];
    const [x, y] = current.split('_');
    // console.log(x, y);
    return [...intersections, [+x, +y]];
  }, []);

  return v;
};

export const addDistances = (point: number[]) =>
  point.reduce((total, current) => current + total, 0);

export const getManhattanDistance = (coordinates: number[][]) => {
  const distances = coordinates.map(addDistances);
  const lowest = Math.min.apply(Math, distances);
  return lowest;
};
