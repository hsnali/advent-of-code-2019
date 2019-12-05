import { fuelCalc, additionalFuelCalc, getTotalFuel } from './main';

import input from './input.json';

console.log('************ Day 1 ************');

const partOne = getTotalFuel(input, fuelCalc);
console.log(`Part One: ${partOne}`);

const partTwo = getTotalFuel(input, additionalFuelCalc);
console.log(`Part Two: ${partTwo}`);
