export const fuelCalc = (mass: number): number => Math.floor(mass / 3) - 2;

export const additionalFuelCalc = (mass: number, sum: number = 0): number => {
  const fuel = fuelCalc(mass);
  if (fuel <= 0) return sum;
  return additionalFuelCalc(fuel, sum + fuel);
};

export const getTotalFuel = (
  input: number[],
  calcMethod: (mass: number) => number
): number =>
  input.reduce((prev: number, curr: number) => prev + calcMethod(curr), 0);
