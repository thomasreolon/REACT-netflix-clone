import React from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './scripts/serviceWorker';

import './styles/index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/*
  not sure whete to put:
      <script src="/__/firebase/7.18.0/firebase-app.js"></script>
      <script src="/__/firebase/init.js"></script>
*/