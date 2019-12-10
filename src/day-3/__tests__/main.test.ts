import { convertPath, getCoordinates, getLargestPoint } from '../main';

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

  test('Calcualtes the largest number in an array of number arrays', () => {
    expect(
      getLargestPoint([
        [1, 2],
        [7, 3],
        [3, 3]
      ])
    ).toBe(7);
  });
});

// describe('Day 3: Part 2', () => {

// });
