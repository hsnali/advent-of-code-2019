export const convertOpcodes = (opcodes: string, noun?: number, verb?: number) =>
  opcodes.split(',').map((code: string, index: number) => {
    if (typeof noun === 'number' && index == 1) return noun;
    else if (typeof verb === 'number' && index == 2) return verb;
    return parseInt(code, 10);
  });

export const intCodeCalc = (opcodes: string | number[]) => {
  let codes = typeof opcodes === 'string' ? convertOpcodes(opcodes) : opcodes;

  codes.forEach((instructionPointer: number, index: number) => {
    if (instructionPointer === 99 || index % 4 !== 0) return;
    const slice = codes.slice(index, index + 4);
    const [, noun, verb, savePos] = slice;
    if (instructionPointer === 1) {
      codes[savePos] = codes[noun] + codes[verb];
    } else if (instructionPointer === 2) {
      codes[savePos] = codes[noun] * codes[verb];
    }
  });

  return codes.toString();
};
