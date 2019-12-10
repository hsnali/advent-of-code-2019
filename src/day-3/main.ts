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
