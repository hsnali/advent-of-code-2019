import { getRange, generatePasswords } from './main';

const input = `387638-919123`;

const range = getRange(input);
const passwords = generatePasswords(range);

console.log('************ Day 4 ************');
console.log(`Part One: 466 (saved after part two filters)`);
console.log(`Part One: ${passwords.length}`);
