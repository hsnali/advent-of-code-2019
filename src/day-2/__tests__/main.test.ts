import { convertOpcodes, intCodeCalc } from '../main';

describe('Day 2: Part 1', () => {
  test('Convert Opcode program to an array', () => {
    expect(convertOpcodes('1,0,0,0,99')).toEqual([1, 0, 0, 0, 99]);
  });

  test('Convert and replace opcode program to an array', () => {
    expect(convertOpcodes('1,0,0,0,99', 1, 1)).toEqual([1, 1, 1, 0, 99]);
  });

  test('Opcode 1 runs add operation on opcodes', () => {
    expect(intCodeCalc('1,0,0,0')).toBe('2,0,0,0');
  });

  test('Opcode 2 runs multiply operation on opcodes', () => {
    expect(intCodeCalc('2,0,0,0')).toBe('4,0,0,0');
  });

  test('Opcode 1 runs add operation on multiple opcodes', () => {
    expect(intCodeCalc('1,0,0,0,1,4,4,4,99')).toBe('2,0,0,0,2,4,4,4,99');
  });

  test('Opcode 2 runs multiply operation on multiple opcodes', () => {
    expect(intCodeCalc('2,0,0,0,2,4,5,4,99')).toBe('4,0,0,0,8,4,5,4,99');
  });

  test('1,9,10,3,2,3,11,0,99,30,40,50 => 1,9,10,70,2,3,11,0,99,30,40,50', () => {
    expect(intCodeCalc('1,9,10,3,2,3,11,0,99,30,40,50')).toBe(
      '3500,9,10,70,2,3,11,0,99,30,40,50'
    );
  });

  test('1,0,0,0,99 => 2,0,0,0,99', () => {
    expect(intCodeCalc('1,0,0,0,99')).toBe('2,0,0,0,99');
  });

  test('2,3,0,3,99 => 2,3,0,6,99', () => {
    expect(intCodeCalc('2,3,0,3,99')).toBe('2,3,0,6,99');
  });

  test('2,4,4,5,99,0 => 2,4,4,5,99,9801', () => {
    expect(intCodeCalc('2,4,4,5,99,0')).toBe('2,4,4,5,99,9801');
  });

  test('1,1,1,4,99,5,6,0,99 => 30,1,1,4,2,5,6,0,99', () => {
    expect(intCodeCalc('1,1,1,4,99,5,6,0,99')).toBe('30,1,1,4,2,5,6,0,99');
  });
});
