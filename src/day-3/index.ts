import 'console.table';

import {
  convertPath,
  getCoordinates,
  getLargestPoint,
  generateArrayGrid,
  drawPath,
  getIntersections,
  getManhattanDistance,
  getLowestDistance
} from './main';

import input from './input';

const [sample1, sample2] = input;
const p1 = getCoordinates(sample1);
// const p2 = getCoordinates(sample2);
//@ts-ignore
const arraySize = getLargestPoint(p1);
// const arraySize = getLargestPoint([...p1, ...p2]);
// const grid = generateArrayGrid(arraySize + 1, '.');
// const path = drawPath(p1, grid);
// const paths = drawPath(p2, drawPath(p1, grid));
//@ts-ignore
// const intersections = getIntersections(paths);
//@ts-ignore
// const result = getLowestDistance(intersections);

console.log(p1);
