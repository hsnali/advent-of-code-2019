interface IPath {
  direction: string;
  vector: number;
}

export const convertPath = (path: string): IPath => {
  const [, direction, vector] = path.split(/([A-Z])/);

  return { direction, vector: +vector };
};

export const getCoordinates = (paths: string, origin = [0, 0]) => {
  const map: number[][] = [];

  paths.split(',').reduce((pointer: number[], current: string) => {
    const { direction, vector } = convertPath(current);

    let [x, y] = pointer;
    let x2 = x;
    let y2 = y;

    switch (direction) {
      case 'U':
        y2 = y + vector;
        break;
      case 'D':
        y2 = y - vector;
        break;
      case 'L':
        x2 = x - vector;
        break;
      case 'R':
        x2 = x + vector;
        break;
      default:
        break;
    }

    map.push([x2, y2]);
    return [x2, y2];
  }, origin);
  return map;
};

export const getLargestPoint = (items: number[], curry: number = 0): number => {
  return items.reduce((largest, current) => {
    if (typeof current === 'object') return getLargestPoint(current, largest);
    return largest > current ? largest : current;
  }, curry);
};

export const generateArrayGrid = (
  length: number,
  placeholder: string | number = '.'
) => Array.from({ length }, () => Array.from({ length }, () => placeholder));

export const drawPath = (
  coordinates: number[][],
  grid: (string | number)[][],
  origin: number[] = [0, 0]
) => {
  // const vectors = getCoordinates(path);
  const symbol = '|';
  let step = origin;
  coordinates.forEach((current, index) => {
    let [x0, y0] = step;
    const [x1, y1] = current;

    grid[x1][y1] = grid[x1][y1] === '.' ? '+' : 'X';
    step = current;

    let directionX = x1 >= x0 ? 1 : -1;
    let directionY = y1 >= y0 ? 1 : -1;

    let indexX = x0;
    let indexY = y0;
    let loop = 0;

    while (true) {
      let moveX = indexX + 1 * directionX;
      let moveY = indexY + 1 * directionY;

      if (x0 !== x1) {
        indexX = moveX;
      }

      if (y0 !== y1) {
        indexY = moveY;
      }

      if (indexX == x1 && indexY == y1) {
        break;
      }

      if (grid && grid[indexX]) {
        let sign = grid[indexX][indexY] !== '.' ? 'X' : symbol;
        grid[indexX][indexY] = sign;
      }

      // Endloop recovery
      if (loop > grid.length) {
        break;
      }
      loop += 1;
    }
  });

  return grid;
};

export const getIntersections = (path: string[][]) => {
  return path.reduce((points, current, index) => {
    let coords = current.reduce((row, item, index) => {
      if (item === 'X') return [...row, index];
      return row;
    }, []);

    return [...points, ...coords.map(i => [index, i])];
  }, []);
};

export const getManhattanDistance = (point: number[]) =>
  point.reduce((total, current) => current + total, 0);

export const getLowestDistance = (coordinates: number[][]) => {
  const distances = coordinates.map(getManhattanDistance);
  const lowest = Math.min.apply(Math, distances);
  return lowest;
};
