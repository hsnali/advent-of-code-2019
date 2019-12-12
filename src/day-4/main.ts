export const getRange = (input: string) => {
  //@ts-ignore
  return input.split('-').map(Math.abs);
};

export const generatePassword = (range: number[]) => {
  const [lower, upper] = range;
  const options = [];

  for (let i = lower; i < upper; i++) {
    let p = i + 1;
    let repeated = p.toString().match(/(.)\1/g);
    if (repeated && repeated.length === 1) {
      options.push(p);
    }
  }

  //   return 124455;
  return options[0];
};
