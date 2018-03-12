// @flow
import type { State, setInput, ResetState } from "../types/types";
export const setInput__State: setInput = (input: Array<number>) => {
  return (state: State = {}, props: {} = {}) => ({
    input: input
  });
};

export const addInput__State: setInput = (time_stamp: number) => {
  return (state: State = {}, props: {} = {}) => ({
    input: state.input.concat(Number(time_stamp).toFixed(2))
  });
};

export const setBpm__State: setInput = (bpm: Array<number>) => {
  return (state: State = {}, props: {} = {}) => ({ bpm });
};

export const setBpmRange__State: setInput = (bpm: number) => {
  return (state: State = {}, props: {} = {}) => ({
    bpmRange: state.bpmRange.concat(bpm)
  });
};

export const setAvgBpm__State: setInput = (avgBpm: Array<number>) => {
  return (state: State = {}, props: {} = {}) => ({ avgBpm });
};

export const resetBpm__State: setInput = (bpmRange: number) => {
  return (state: State = {}, props: State = {}) => ({ bpmRange });
};

export const resetAll__State: ResetState = () => {
  return (state: State = {}, props: {} = {}) => ({
    bpmRange: [],
    input: [],
    avgBpm: 0,
    bpm: 0
  });
};
