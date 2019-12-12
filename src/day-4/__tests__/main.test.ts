import { getRange, generatePassword } from '../main';

describe('Day 4: Part 1', () => {
  test('Splits input to lower and upper range of numbers', () => {
    const input = '123456-234567';
    expect(getRange(input)).toEqual([123456, 234567]);
  });

  test('Returns a six digit number', () => {
    const input = '123456-234567';
    const range = getRange(input);
    const password = generatePassword(range);

    expect(password.toString().length).toBe(6);
  });

  test('Number  is in the range provided', () => {
    const input = '123456-234567';
    const [lower, upper] = getRange(input);
    const password = generatePassword([lower, upper]);

    expect(password).toBeGreaterThanOrEqual(lower);
    expect(password).toBeLessThanOrEqual(upper);
  });

  test('Number has at least two equal adjacent numbers', () => {
    const input = '123456-456789';
    const [lower, upper] = getRange(input);
    const password = generatePassword([lower, upper]);
    const totalRepeates = password.toString().match(/(.)\1/g).length;

    expect(totalRepeates).toBe(1);
  });

  test('Number never decreases from left to right', () => {
    const input = '123456-456789';
    const [lower, upper] = getRange(input);
    const password = generatePassword([lower, upper]);

    //@ts-ignore
    const increases = password
      .toString()
      .split('')
      .reduce(
        (prev, num) => (parseInt(num, 10) >= prev ? parseInt(num, 10) : -1),
        -1
      );
    //223450
    expect(increases).not.toBe(-1);
  });
});

// describe('Day 4: Part 2', () => {

// });
