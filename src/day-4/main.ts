export const getRange = (input: string) => {
  //@ts-ignore
  return input.split('-').map(Math.abs);
};

export const generatePasswords = (range: number[]) => {
  const [lower, upper] = range;
  const options = [];

  for (let i = lower; i <= upper; i++) {
    const num = i.toString();
    // refactored from: https://www.youtube.com/watch?v=8ruAKdZf9fY
    const chars = [...num];
    const map: { [index: string]: number } = {};
    chars.map(c => (map[c] = (map[c] || 0) + 1));

    const hasOnlyDouble = Object.entries(map).find(entry => entry[1] === 2);

    if (num.length === 6 && hasOnlyDouble && num === chars.sort().join('')) {
      options.push(i);
    }
  }

  return options;
};
