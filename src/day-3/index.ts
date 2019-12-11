import {
  mapPath,
  getIntersections,
  getManhattanDistance,
  getClosestIntersection
} from './main';
import input from './input';

const [path1, path2] = input;

const mergedPaths = mapPath(path2, mapPath(path1, {}, 'A'), 'B');
const intersections = getIntersections(mergedPaths);
const distance = getManhattanDistance(intersections);

const dayTwoPaths = mapPath(path2, mapPath(path1, {}, 'A', true), 'B', true);
const closest = getClosestIntersection(dayTwoPaths);

console.log('************ Day 3 ************');
console.log(`Part One: ${distance}`);
console.log(`Part Two: ${closest}`);
