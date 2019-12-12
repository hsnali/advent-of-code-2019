import {
  convertPath,
  mapPath,
  getIntersections,
  getManhattanDistance,
  getClosestIntersection
} from '../main';

describe('Day 3: Part 1', () => {
  test('Convert a text path (R1) to a directional and vector', () => {
    expect(convertPath('R1')).toMatchObject(['R', 1]);
  });

  test('Convert a path to a map', () => {
    const path = 'R1,U1';
    const answer = new Map([
      ['1,0', 1],
      ['1,1', 2]
    ]);
    expect(mapPath(path)).toEqual(answer);
  });

  test('Get the intersections of two paths', () => {
    const path1 = 'R1,U1';
    const path2 = 'U1,R1';
    const map1 = mapPath(path1);
    const map2 = mapPath(path2);
    const intersections = getIntersections(map1, map2);

    expect(intersections).toEqual(['1,1']);
  });

  test('Get the intersections of sample: R8,U5,L5,D3 & U7,R6,D4,L4', () => {
    const path1 = 'R8,U5,L5,D3';
    const path2 = 'U7,R6,D4,L4';
    const map1 = mapPath(path1);
    const map2 = mapPath(path2);
    const intersections = getIntersections(map1, map2);

    expect(intersections).toEqual(['6,5', '3,3']);
  });

  test('Calculate Manhattan distance of sample: R8,U5,L5,D3 & U7,R6,D4,L4', () => {
    const path1 = 'R8,U5,L5,D3';
    const path2 = 'U7,R6,D4,L4';
    const map1 = mapPath(path1);
    const map2 = mapPath(path2);
    const intersections = getIntersections(map1, map2);
    const distance = getManhattanDistance(intersections);

    expect(distance).toBe(6);
  });

  test('Calculate Manhattan distance of sample: R75,D30,R83,U83,L12,D49,R71,U7,L72 & U62,R66,U55,R34,D71,R55,D58,R83', () => {
    const path1 = 'R75,D30,R83,U83,L12,D49,R71,U7,L72';
    const path2 = 'U62,R66,U55,R34,D71,R55,D58,R83';
    const map1 = mapPath(path1);
    const map2 = mapPath(path2);
    const intersections = getIntersections(map1, map2);
    const distance = getManhattanDistance(intersections);

    expect(distance).toBe(159);
  });

  test('Calculate Manhattan distance of sample: R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51 & U98,R91,D20,R16,D67,R40,U7,R15,U6,R7', () => {
    const path1 = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51';
    const path2 = 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7';
    const map1 = mapPath(path1);
    const map2 = mapPath(path2);
    const intersections = getIntersections(map1, map2);
    const distance = getManhattanDistance(intersections);
    expect(distance).toBe(135);
  });
});

describe('Day 3: Part 2', () => {
  test('Get the number of steps to two paths intersections', () => {
    const path1 = 'R8,U5,L5,D3';
    const path2 = 'U7,R6,D4,L4';
    const map1 = mapPath(path1);
    const map2 = mapPath(path2);
    const intersections = getIntersections(map1, map2);
    const closest = getClosestIntersection(map1, map2, intersections);

    expect(closest).toBe(30);
  });

  test('R75,D30,R83,U83,L12,D49,R71,U7,L72 & U62,R66,U55,R34,D71,R55,D58,R83 = 610 steps', () => {
    const path1 = 'R75,D30,R83,U83,L12,D49,R71,U7,L72';
    const path2 = 'U62,R66,U55,R34,D71,R55,D58,R83';
    const map1 = mapPath(path1);
    const map2 = mapPath(path2);
    const intersections = getIntersections(map1, map2);
    const closest = getClosestIntersection(map1, map2, intersections);

    expect(closest).toBe(610);
  });

  test('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51 & U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 = 410 steps', () => {
    const path1 = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51';
    const path2 = 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7';
    const map1 = mapPath(path1);
    const map2 = mapPath(path2);
    const intersections = getIntersections(map1, map2);
    const closest = getClosestIntersection(map1, map2, intersections);

    expect(closest).toBe(410);
  });
});
