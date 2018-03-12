import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const appRoot = document.getElementById('root');

ReactDOM.render(
  <App/>, appRoot);
registerServiceWorker();
