import {
  getPathMove,
  mapPath,
  getIntersections,
  getManhattanDistance
} from '../main';

describe('Day 3: Part 1', () => {
  test('Convert a text path (R1) to a directional move (1,0)', () => {
    expect(getPathMove('R1')).toMatchObject([1, 0]);
  });

  test('Convert a path to a hashmap', () => {
    const path = 'R1,U1';
    expect(mapPath(path)).toMatchObject({ '1_0': '-', '1_1': '-' });
  });

  test('Convert a longer path to a hashmap', () => {
    const path = 'R8,U5,L5,D3';
    expect(mapPath(path)).toMatchObject({
      '1_0': '-',
      '2_0': '-',
      '3_0': '-',
      '4_0': '-',
      '5_0': '-',
      '6_0': '-',
      '7_0': '-',
      '8_0': '-',
      '8_1': '-',
      '8_2': '-',
      '8_3': '-',
      '8_4': '-',
      '8_5': '-',
      '7_5': '-',
      '6_5': '-',
      '5_5': '-',
      '4_5': '-',
      '3_5': '-',
      '3_4': '-',
      '3_3': '-',
      '3_2': '-'
    });
  });

  test('Map two paths onto one hashmaps', () => {
    const path1 = 'R1,U1';
    const path2 = 'U1,R1';
    const mergedPaths = mapPath(path2, mapPath(path1, {}, 'A'), 'B');

    expect(mergedPaths).toMatchObject({ '1_0': 'A', '1_1': 'AB' });
    expect(mergedPaths).toMatchObject({ '0_1': 'B', '1_1': 'AB' });
  });

  test('Mark intersects of two paths on one hashmaps', () => {
    const path1 = 'R1,U1';
    const path2 = 'U1,R1';
    const mergedPaths = mapPath(path2, mapPath(path1, {}, 'A'), 'B');
    expect(mergedPaths).toMatchObject({ '1_0': 'A', '1_1': 'AB' });
    expect(mergedPaths).toMatchObject({ '0_1': 'B', '1_1': 'AB' });
    expect(mergedPaths).toMatchObject({ '1_1': 'AB' });
  });

  test('Get the intersections of two paths', () => {
    const path1 = 'R1,U1';
    const path2 = 'U1,R1';
    const mergedPaths = mapPath(path2, mapPath(path1, {}, 'A'), 'B');
    const intersections = getIntersections(mergedPaths);

    expect(intersections).toEqual([[1, 1]]);
  });

  test('Get the intersections of sample: R8,U5,L5,D3 & U7,R6,D4,L4', () => {
    const path1 = 'R8,U5,L5,D31';
    const path2 = 'U7,R6,D4,L4';
    const mergedPaths = mapPath(path2, mapPath(path1, {}, 'A'), 'B');
    const intersections = getIntersections(mergedPaths);

    expect(intersections).toEqual([
      [6, 5],
      [3, 3]
    ]);
  });

  test('Calculate Manhattan distance of sample: R8,U5,L5,D3 & U7,R6,D4,L4', () => {
    const path1 = 'R8,U5,L5,D31';
    const path2 = 'U7,R6,D4,L4';
    const mergedPaths = mapPath(path2, mapPath(path1, {}, 'A'), 'B');
    const intersections = getIntersections(mergedPaths);
    const mdistance = getManhattanDistance(intersections);

    expect(mdistance).toBe(6);
  });

  test('Calculate Manhattan distance of sample: R75,D30,R83,U83,L12,D49,R71,U7,L72 & U62,R66,U55,R34,D71,R55,D58,R83', () => {
    const path1 = 'R75,D30,R83,U83,L12,D49,R71,U7,L72';
    const path2 = 'U62,R66,U55,R34,D71,R55,D58,R83';
    const mergedPaths = mapPath(path2, mapPath(path1, {}, 'A'), 'B');
    const intersections = getIntersections(mergedPaths);
    const distance = getManhattanDistance(intersections);

    expect(distance).toBe(159);
  });

  test('Calculate Manhattan distance of sample: R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51 & U98,R91,D20,R16,D67,R40,U7,R15,U6,R7', () => {
    const path1 = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51';
    const path2 = 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7';
    const mergedPaths = mapPath(path2, mapPath(path1, {}, 'A'), 'B');
    const intersections = getIntersections(mergedPaths);
    const distance = getManhattanDistance(intersections);

    expect(distance).toBe(135);
  });
});

// describe('Day 3: Part 2', () => {

// });
