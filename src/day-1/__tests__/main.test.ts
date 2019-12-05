import { fuelCalc, additionalFuelCalc } from '../main';

describe('Day 1: Part 1', () => {
  test('It should return 2 for a mass of 12', () => {
    expect(fuelCalc(12)).toBe(2);
  });

  test('It should return 2 for a mass of 14', () => {
    expect(fuelCalc(14)).toBe(2);
  });

  test('It should return 654 for a mass of 1969', () => {
    expect(fuelCalc(1969)).toBe(654);
  });

  test('It should return 33583 for a mass of 100756', () => {
    expect(fuelCalc(100756)).toBe(33583);
  });
});

describe('Day 1: Part 2', () => {
  test('It should ignore fuel less than 0', () => {
    expect(additionalFuelCalc(0)).toBe(0);
  });

  test('It should return 2 mass of 14', () => {
    expect(additionalFuelCalc(14)).toBe(2);
  });

  test('It should return 966 mass of 1969', () => {
    expect(additionalFuelCalc(1969)).toBe(966);
  });

  test('It should return 50346 mass of 100756', () => {
    expect(additionalFuelCalc(100756)).toBe(50346);
  });
});
