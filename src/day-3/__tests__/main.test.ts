import {
  getPathMove,
  mapPath,
  getIntersections,
  getManhattanDistance
  //   getCoordinates
  //   getLargestPoint,
  //   generateArrayGrid,
  //   drawPath,
  //   getManhattanDistance,
  //   getLowestDistance
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
    const mdistance = getManhattanDistance(intersections);

    expect(mdistance).toBe(159);
  });

  test('Calculate Manhattan distance of sample: R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51 & U98,R91,D20,R16,D67,R40,U7,R15,U6,R7', () => {
    const path1 = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51';
    const path2 = 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7';
    const mergedPaths = mapPath(path2, mapPath(path1, {}, 'A'), 'B');
    const intersections = getIntersections(mergedPaths);
    const mdistance = getManhattanDistance(intersections);

    expect(mdistance).toBe(135);
  });

  //   test('Maps a set of paths to coordinates', () => {
  //     const paths = 'R8,U5';
  //     expect(getCoordinates(paths)).toStrictEqual([
  //       [8, 0],
  //       [8, 5]
  //     ]);
  //   });

  //   test('Maps a long set of paths to coordinates', () => {
  //     const paths = 'U7,R6,D4,L4';
  //     expect(getCoordinates(paths)).toStrictEqual([
  //       [0, 7],
  //       [6, 7],
  //       [6, 3],
  //       [2, 3]
  //     ]);
  //   });

  //   test('Calculates the largest number in an array', () => {
  //     expect(getLargestPoint([3, 2, 8, 7])).toBe(8);
  //   });

  //   test('Calculates the largest number in an array of number arrays', () => {
  //     expect(
  //       getLargestPoint([
  //         [1, 2],
  //         [7, 3],
  //         [3, 3]
  //       ])
  //     ).toBe(7);
  //   });

  //   test('Generate a 2 dimentional array of size N', () => {
  //     expect(generateArrayGrid(2, 0)).toMatchObject([
  //       [0, 0],
  //       [0, 0]
  //     ]);
  //   });

  //   test('Draws a path on a two dimentional grid', () => {
  //     const coordinates = getCoordinates('R2,U2');
  //     const arraySize = getLargestPoint(coordinates);
  //     const grid = generateArrayGrid(arraySize + 1, '.');
  //     const result = drawPath(coordinates, grid);

  //     // console.table(result);
  //     expect(result).toMatchObject([
  //       ['.', '.', '.'],
  //       ['|', '.', '.'],
  //       ['+', '|', '+']
  //     ]);
  //   });

  //   test('Draws a longer path on a two dimentional grid', () => {
  //     const coordinates = getCoordinates('R8,U5,L5,D3');
  //     const arraySize = getLargestPoint(coordinates);
  //     const grid = generateArrayGrid(arraySize + 1, '.');
  //     const result = drawPath(coordinates, grid);

  //     // console.log(result);
  //     expect(result).toMatchObject([
  //       ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  //       ['|', '.', '.', '.', '.', '.', '.', '.', '.'],
  //       ['|', '.', '.', '.', '.', '.', '.', '.', '.'],
  //       ['|', '.', '+', '|', '|', '+', '.', '.', '.'],
  //       ['|', '.', '.', '.', '.', '|', '.', '.', '.'],
  //       ['|', '.', '.', '.', '.', '|', '.', '.', '.'],
  //       ['|', '.', '.', '.', '.', '|', '.', '.', '.'],
  //       ['|', '.', '.', '.', '.', '|', '.', '.', '.'],
  //       ['+', '|', '|', '|', '|', '+', '.', '.', '.']
  //     ]);
  //   });

  //   test('Draws a path with X at intersections', () => {
  //     const c1 = getCoordinates('R2,U2');
  //     const c2 = getCoordinates('U2,R2');
  //     const arraySize = getLargestPoint([...c1, ...c2]);
  //     const grid = generateArrayGrid(arraySize + 1, '.');
  //     const result = drawPath(c2, drawPath(c1, grid));
  //     expect(result).toMatchObject([
  //       ['.', '|', '+'],
  //       ['|', '.', '|'],
  //       ['+', '|', 'X']
  //     ]);
  //   });

  //   test('Draws a longer path with X at intersections', () => {
  //     const c1 = getCoordinates('R8,U5,L5,D3');
  //     const c2 = getCoordinates('U7,R6,D4,L4');
  //     const arraySize = getLargestPoint([...c1, ...c2]);
  //     const grid = generateArrayGrid(arraySize + 1, '.');
  //     const result = drawPath(c2, drawPath(c1, grid));

  //     expect(result).toMatchObject([
  //       ['.', '|', '|', '|', '|', '|', '|', '+', '.'],
  //       ['|', '.', '.', '.', '.', '.', '.', '|', '.'],
  //       ['|', '.', '.', '+', '.', '.', '.', '|', '.'],
  //       ['|', '.', '+', 'X', '|', '+', '.', '|', '.'],
  //       ['|', '.', '.', '|', '.', '|', '.', '|', '.'],
  //       ['|', '.', '.', '|', '.', '|', '.', '|', '.'],
  //       ['|', '.', '.', '+', '|', 'X', '|', '+', '.'],
  //       ['|', '.', '.', '.', '.', '|', '.', '.', '.'],
  //       ['+', '|', '|', '|', '|', '+', '.', '.', '.']
  //     ]);
  //   });

  //   test('Calculate the Manhattan Distance of a coordinate', () => {
  //     const coordinates = getCoordinates('R2,U2');
  //     const result = getManhattanDistance([1, 1]);

  //     expect(result).toBe(2);
  //   });

  //   test('Calculate the Manhattan Distance of an array of coordinates', () => {
  //     const coordinates = getCoordinates('R2,U2');
  //     const result = getLowestDistance([
  //       [1, 1],
  //       [2, 2]
  //     ]);

  //     expect(result).toBe(2);
  //   });

  //   test('Get intersections of a path', () => {
  //     const c1 = getCoordinates('R2,U2');
  //     const c2 = getCoordinates('U2,R2');
  //     const arraySize = getLargestPoint([...c1, ...c2]);
  //     const grid = generateArrayGrid(arraySize + 1, '.');
  //     const paths = drawPath(c2, drawPath(c1, grid));
  //     const intersections = getIntersections(paths);
  //     expect(intersections).toMatchObject([[2, 2]]);
  //   });

  //   test('Get intersections of a path with multiple intersections', () => {
  //     const c1 = getCoordinates('R8,U5,L5,D3');
  //     const c2 = getCoordinates('U7,R6,D4,L4');
  //     const arraySize = getLargestPoint([...c1, ...c2]);
  //     const grid = generateArrayGrid(arraySize + 1, '.');
  //     const paths = drawPath(c2, drawPath(c1, grid));
  //     const intersections = getIntersections(paths);
  //     expect(intersections).toMatchObject([
  //       [3, 3],
  //       [6, 5]
  //     ]);
  //   });

  //   test('Calculate the Manhattan Distance of R8,U5,L5,D3 & U7,R6,D4,L4', () => {
  //     const c1 = getCoordinates('R8,U5,L5,D3');
  //     const c2 = getCoordinates('U7,R6,D4,L4');
  //     const arraySize = getLargestPoint([...c1, ...c2]);
  //     const grid = generateArrayGrid(arraySize + 1, '.');
  //     const paths = drawPath(c2, drawPath(c1, grid));
  //     const intersections = getIntersections(paths);

  //     const result = getLowestDistance(intersections);

  //     expect(result).toBe(6);
  //   });

  //   test('Calculate the Manhattan Distance of R75,D30,R83,U83,L12,D49,R71,U7,L72 & U62,R66,U55,R34,D71,R55,D58,R83', () => {
  //     const c1 = getCoordinates('R8,U5,L5,D3');
  //     const c2 = getCoordinates('U7,R6,D4,L4');
  //     const arraySize = getLargestPoint([...c1, ...c2]);
  //     const grid = generateArrayGrid(arraySize + 1, '.');
  //     const paths = drawPath(c2, drawPath(c1, grid));
  //     const intersections = getIntersections(paths);

  //     const result = getLowestDistance(intersections);

  //     expect(result).toBe(159);
  //   });
});

// describe('Day 3: Part 2', () => {

// });
