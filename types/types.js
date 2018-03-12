export type State = {
  input: Array<number>,
  bpm: number,
  bpmRange: Array<number>,
  avgBpm: number
};

export type setInput = (
  input?: Array<number>,
  bpm?: number,
  avgBpm?: Array<number>,
  bpmRange?: number
) => (S: State, P: {}}) => {
    input?: Array<number>,
    bpm?: number,
    avgBpm?: Array<number>,
    bpmRange?: number  };

export type ResetState = () => (S: State, P: {}) => {
  bpmRange: Array<number>,
  input: Array<number>,
  avgBpm: 0,
  bpm: 0
}