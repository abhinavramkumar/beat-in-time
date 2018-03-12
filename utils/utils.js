// @flow
export const getTimeSamples = (input: string) => {
  return input.length > 4 ? input.slice(input.length - 4, input.length) : [];
};

export const computeBPM = (time_differences: Array<number>) => {
  let avg = time_differences.reduce((acc, curr) => curr + acc, 0) / 3000;
  return Math.floor(60 * 2 / (2 * avg));
};

export const averageBPM = (bpmRange: Array<number>) => {
  let sum =
    bpmRange.length > 2 ? bpmRange.reduce((acc, curr) => acc + curr, 0) : 0;
  return sum !== 0 ? sum / bpmRange.length : 0;
};
