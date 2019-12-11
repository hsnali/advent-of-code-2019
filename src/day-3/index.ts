import { mapPath, getIntersections, getManhattanDistance } from './main';
import input from './input';

const [path1, path2] = input;

const mergedPaths = mapPath(path2, mapPath(path1, {}, 'A'), 'B');
const intersections = getIntersections(mergedPaths);
const distance = getManhattanDistance(intersections);

console.log('************ Day 3 ************');
console.log(`Part One: ${distance}`);
