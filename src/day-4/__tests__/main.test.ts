import { increases, getRange, generatePasswords } from '../main';

describe('Day 4: Part 1', () => {
  test('Splits input to lower and upper range of numbers', () => {
    const input = '123456-234567';
    expect(getRange(input)).toEqual([123456, 234567]);
  });

  test('Returns a six digit number', () => {
    const input = '123456-234567';
    const range = getRange(input);
    const [first] = generatePasswords(range);

    expect(first.toString().length).toBe(6);
  });

  test('Number  is in the range provided', () => {
    const input = '123456-234567';
    const [lower, upper] = getRange(input);
    const [first] = generatePasswords([lower, upper]);

    expect(first).toBeGreaterThanOrEqual(lower);
    expect(first).toBeLessThanOrEqual(upper);
  });

  test('Number has at least two equal adjacent numbers', () => {
    const input = '123456-456789';
    const [lower, upper] = getRange(input);
    const [first] = generatePasswords([lower, upper]);
    const totalRepeates = first.toString().match(/(.)\1/g).length;

    expect(totalRepeates).toBeGreaterThanOrEqual(1);
  });

  test('Number never decreases from left to right', () => {
    const input = '223450-223450';
    const [lower, upper] = getRange(input);
    const [first] = generatePasswords([lower, upper]);

    expect(first).toBeUndefined();
  });

  // test('111111 meets these criteria (double 11, never decreases)', () => {
  //   const input = '111111-111111';
  //   const [lower, upper] = getRange(input);
  //   const [first] = generatePasswords([lower, upper]);

  //   expect(first).toEqual(111111);
  // });

  test('223450 does not meet these criteria (decreasing pair of digits 50)', () => {
    const input = '223450-223450';
    const [lower, upper] = getRange(input);
    const [first] = generatePasswords([lower, upper]);

    expect(first).toBeUndefined();
  });

  test('123789 does not meet these criteria (no double)', () => {
    const input = '123789-123789';
    const [lower, upper] = getRange(input);
    const [first] = generatePasswords([lower, upper]);

    expect(first).toBeUndefined();
  });
});

describe('Day 4: Part 2', () => {
  test('112233 meets these criteria', () => {
    const input = '112233-112233';
    const [lower, upper] = getRange(input);
    const [first] = generatePasswords([lower, upper]);

    expect(first).toEqual(112233);
  });

  test('123444 no longer meets the criteria', () => {
    const input = '123444-123444';
    const [lower, upper] = getRange(input);
    const [first] = generatePasswords([lower, upper]);

    expect(first).toBeUndefined();
  });

  test('111122 meets the criteria', () => {
    const input = '111122-111122';
    const [lower, upper] = getRange(input);
    const [first] = generatePasswords([lower, upper]);

    expect(first).toEqual(111122);
  });
});
