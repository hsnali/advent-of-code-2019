import { getRange, generatePassword } from '../main';

describe('Day 4: Part 1', () => {
  test('Splits input to lower and upper range of numbers', () => {
    const input = '111111-222222';
    expect(getRange(input)).toEqual([111111, 222222]);
  });

  test('Returns a six digit number', () => {
    const input = '111111-222222';
    const range = getRange(input);
    const password = generatePassword(range);

    expect(password.toString().length).toBe(6);
  });

  test('Number  is in the range provided', () => {
    const input = '111111-222222';
    const [lower, upper] = getRange(input);
    const password = generatePassword([lower, upper]);

    expect(password).toBeGreaterThanOrEqual(lower);
    expect(password).toBeLessThanOrEqual(upper);
  });

  test('Number has at least two equal adjacent numbers', () => {
    const input = '123456-456789';
    const [lower, upper] = getRange(input);
    const password = generatePassword([lower, upper]);

    expect(password.toString()).toMatch(/(.)\1/);
  });
});

// describe('Day 4: Part 2', () => {

// });
