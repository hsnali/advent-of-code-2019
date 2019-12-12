export const getRange = (input: string) => {
  //@ts-ignore
  return input.split('-').map(Math.abs);
};

export const generatePassword = (range: number[]) => {
  const [lower, upper] = range;

  return lower;
};
