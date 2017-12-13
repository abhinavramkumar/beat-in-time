export const setInput__State = (input) => {
  return (state = {}, props = {}) => ({input})
}

export const addInput__State = (time_stamp) => {
  return (state = {}, props = {}) => ({
    input: state
      .input
      .concat(Number(time_stamp).toFixed(2))

  });
};

export const setBpm__State = (bpm) => {
  return (state = {}, props = {}) => ({bpm});
};

export const setBpmRange__State = (bpm) => {
  return (state = {}, props = {}) => ({
    bpmRange: state
      .bpmRange
      .concat(bpm)
  });
}

export const setAvgBpm__State = (avgBpm) => {
  return (state = {}, props = {}) => ({avgBpm});
};

export const resetBpm__State = (bpmRange) => {
  return (state = {}, props = {}) => ({bpmRange})
};

export const resetAll__State = () => {
  return (state = {}, props = {}) => ({bpmRange: [], input: [], avgBpm: 0, bpm: 0})
};