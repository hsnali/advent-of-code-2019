import {
  mapPath,
  getIntersections,
  getManhattanDistance,
  getClosestIntersection
} from './main';
import input from './input';

const [path1, path2] = input;

const map1 = mapPath(path1);
const map2 = mapPath(path2);
const intersections = getIntersections(map1, map2);
const distance = getManhattanDistance(intersections);
const closest = getClosestIntersection(map1, map2, intersections);

console.log('************ Day 3 ************');
console.log(`Part One: ${distance}`);
console.log(`Part Two: ${closest}`);
