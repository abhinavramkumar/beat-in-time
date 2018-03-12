import React, {Component} from 'react';
import BpmDashboard from './BpmDashboard';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <BpmDashboard></BpmDashboard>
      </div>
    );
  }
}

export default App;
