import {
  convertPath,
  getCoordinates,
  getLargestPoint,
  generateArrayGrid,
  drawPath,
  getIntersections,
  getManhattanDistance,
  getLowestDistance
} from '../main';

describe('Day 3: Part 1', () => {
  test('Convert a text path to a direction and vector', () => {
    const path = 'R1';
    expect(convertPath(path)).toMatchObject({ direction: 'R', vector: 1 });
  });

  test('Maps a set of paths to coordinates', () => {
    const paths = 'R8,U5';
    expect(getCoordinates(paths)).toStrictEqual([
      [8, 0],
      [8, 5]
    ]);
  });

  test('Maps a long set of paths to coordinates', () => {
    const paths = 'U7,R6,D4,L4';
    expect(getCoordinates(paths)).toStrictEqual([
      [0, 7],
      [6, 7],
      [6, 3],
      [2, 3]
    ]);
  });

  test('Calculates the largest number in an array', () => {
    expect(getLargestPoint([3, 2, 8, 7])).toBe(8);
  });

  test('Calculates the largest number in an array of number arrays', () => {
    expect(
      getLargestPoint([
        [1, 2],
        [7, 3],
        [3, 3]
      ])
    ).toBe(7);
  });

  test('Generate a 2 dimentional array of size N', () => {
    expect(generateArrayGrid(2, 0)).toMatchObject([
      [0, 0],
      [0, 0]
    ]);
  });

  test('Draws a path on a two dimentional grid', () => {
    const coordinates = getCoordinates('R2,U2');
    const arraySize = getLargestPoint(coordinates);
    const grid = generateArrayGrid(arraySize + 1, '.');
    const result = drawPath(coordinates, grid);

    // console.table(result);
    expect(result).toMatchObject([
      ['.', '.', '.'],
      ['|', '.', '.'],
      ['+', '|', '+']
    ]);
  });

  test('Draws a longer path on a two dimentional grid', () => {
    const coordinates = getCoordinates('R8,U5,L5,D3');
    const arraySize = getLargestPoint(coordinates);
    const grid = generateArrayGrid(arraySize + 1, '.');
    const result = drawPath(coordinates, grid);

    // console.log(result);
    expect(result).toMatchObject([
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['|', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['|', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['|', '.', '+', '|', '|', '+', '.', '.', '.'],
      ['|', '.', '.', '.', '.', '|', '.', '.', '.'],
      ['|', '.', '.', '.', '.', '|', '.', '.', '.'],
      ['|', '.', '.', '.', '.', '|', '.', '.', '.'],
      ['|', '.', '.', '.', '.', '|', '.', '.', '.'],
      ['+', '|', '|', '|', '|', '+', '.', '.', '.']
    ]);
  });

  test('Draws a path with X at intersections', () => {
    const c1 = getCoordinates('R2,U2');
    const c2 = getCoordinates('U2,R2');
    const arraySize = getLargestPoint([...c1, ...c2]);
    const grid = generateArrayGrid(arraySize + 1, '.');
    const result = drawPath(c2, drawPath(c1, grid));
    expect(result).toMatchObject([
      ['.', '|', '+'],
      ['|', '.', '|'],
      ['+', '|', 'X']
    ]);
  });

  test('Draws a longer path with X at intersections', () => {
    const c1 = getCoordinates('R8,U5,L5,D3');
    const c2 = getCoordinates('U7,R6,D4,L4');
    const arraySize = getLargestPoint([...c1, ...c2]);
    const grid = generateArrayGrid(arraySize + 1, '.');
    const result = drawPath(c2, drawPath(c1, grid));

    expect(result).toMatchObject([
      ['.', '|', '|', '|', '|', '|', '|', '+', '.'],
      ['|', '.', '.', '.', '.', '.', '.', '|', '.'],
      ['|', '.', '.', '+', '.', '.', '.', '|', '.'],
      ['|', '.', '+', 'X', '|', '+', '.', '|', '.'],
      ['|', '.', '.', '|', '.', '|', '.', '|', '.'],
      ['|', '.', '.', '|', '.', '|', '.', '|', '.'],
      ['|', '.', '.', '+', '|', 'X', '|', '+', '.'],
      ['|', '.', '.', '.', '.', '|', '.', '.', '.'],
      ['+', '|', '|', '|', '|', '+', '.', '.', '.']
    ]);
  });

  test('Calculate the Manhattan Distance of a coordinate', () => {
    const coordinates = getCoordinates('R2,U2');
    const result = getManhattanDistance([1, 1]);

    expect(result).toBe(2);
  });

  test('Calculate the Manhattan Distance of an array of coordinates', () => {
    const coordinates = getCoordinates('R2,U2');
    const result = getLowestDistance([
      [1, 1],
      [2, 2]
    ]);

    expect(result).toBe(2);
  });

  test('Get intersections of a path', () => {
    const c1 = getCoordinates('R2,U2');
    const c2 = getCoordinates('U2,R2');
    const arraySize = getLargestPoint([...c1, ...c2]);
    const grid = generateArrayGrid(arraySize + 1, '.');
    const paths = drawPath(c2, drawPath(c1, grid));
    const intersections = getIntersections(paths);
    expect(intersections).toMatchObject([[2, 2]]);
  });

  test('Get intersections of a path with multiple intersections', () => {
    const c1 = getCoordinates('R8,U5,L5,D3');
    const c2 = getCoordinates('U7,R6,D4,L4');
    const arraySize = getLargestPoint([...c1, ...c2]);
    const grid = generateArrayGrid(arraySize + 1, '.');
    const paths = drawPath(c2, drawPath(c1, grid));
    const intersections = getIntersections(paths);
    expect(intersections).toMatchObject([
      [3, 3],
      [6, 5]
    ]);
  });

  test('Calculate the Manhattan Distance of R8,U5,L5,D3 & U7,R6,D4,L4', () => {
    const c1 = getCoordinates('R8,U5,L5,D3');
    const c2 = getCoordinates('U7,R6,D4,L4');
    const arraySize = getLargestPoint([...c1, ...c2]);
    const grid = generateArrayGrid(arraySize + 1, '.');
    const paths = drawPath(c2, drawPath(c1, grid));
    const intersections = getIntersections(paths);

    const result = getLowestDistance(intersections);

    expect(result).toBe(6);
  });
});

// describe('Day 3: Part 2', () => {

// });
