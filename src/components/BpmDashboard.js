import React, {Component} from 'react';
import {getTimeSamples, computeBPM, averageBPM} from '../utils/utils';
import {
  setInput__State,
  addInput__State,
  setBpm__State,
  setBpmRange__State,
  setAvgBpm__State,
  resetBpm__State,
  resetAll__State
} from '../stateChanges/stateChanges';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faSyncAlt, faHeartbeat, faArrowDown} from '@fortawesome/fontawesome-free-solid';

export default class extends Component {
  state = {
    input: [],
    bpm: 0,
    bpmRange: [],
    avgBpm: 0
  }

  updateBeats = e => {
    e.persist();

    if (this.state.input.length > 40) {
      let reducedInput = this
        .state
        .input
        .slice(31, 40);
      this.setState(setInput__State(reducedInput));
    }

    // Add timestamp into state.input
    this.setState(addInput__State(e.timeStamp));

    let input = this.state.input;

    //- DEBUG - console.log("INPUT STATE", input); Get Time Samples Array
    let time_samples = getTimeSamples(input);

    //- DEBUG - console.log("TIME SAMPLES", time_samples); Compute Time Difference
    let time_differences = [];
    time_samples.map((x, index) => {
      if (index < time_samples.length - 1) {
        time_differences.push(time_samples[index + 1] - x);
      }
    });

    let bpm = 0;
    if (input.length > 5) {
      // Compute BPM
      bpm = computeBPM(time_differences);

      //- DEBUG - console.log("BPM", bpm); Set BPM state
      this.setState(setBpm__State(bpm));
    }

    if (bpm > 0) {
      this.setState(setBpmRange__State(bpm));
      let avgBpm = Math.ceil(Math.round(averageBPM(this.state.bpmRange)));
      this.setState(setAvgBpm__State(avgBpm));

      // If BPM range array exceeds 30 then slice it
      let isBpmRangeExceeded = this.state.bpmRange.length > 30;
      if (isBpmRangeExceeded) {
        let bpmRange = this.state.bpmRange;
        let newBpmRange = bpmRange.slice(15, 31);
        this.setState(resetBpm__State(newBpmRange));
      }
    }
  }

  resetAll = e => {
    e.preventDefault();
    this.setState(resetAll__State());
  }

  render() {
    return (
      <div className="BpmDashboard">
        <div className="BpmDashboard__container">
          <div className="BpmDashboard__refresh" onClick={this.resetAll}>
            <FontAwesomeIcon icon={faSyncAlt}></FontAwesomeIcon>
          </div>
          <div className="BpmDashboard__display">
            {String(this.state.bpm).toLowerCase !== 'infinity' && `${this.state.bpm} bpm`}
          </div>
          <div className="BpmDashboard__metadata">
            {this.state.avgBpm !== 0
              ? <p>
                  <FontAwesomeIcon icon={faHeartbeat}></FontAwesomeIcon>
                  {`${this.state.avgBpm} bpm`}</p>
              : <p>
                <FontAwesomeIcon icon={faHeartbeat}></FontAwesomeIcon>
                {`0 bpm`}</p>}
            <p></p>
          </div>
          <button className="BpmDashboard__button" onClick={this.updateBeats}>
            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
            Tap along with the song!
          </button>
        </div>

      </div>
    );
  }
}