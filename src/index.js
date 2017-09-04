import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'; //NoMatch,
import registerServiceWorker from './registerServiceWorker';
import App from './App.js';

// REDUX
import { Provider } from 'react-redux';
import configureStore from './store'

// Styles
import './styles/index.css';
import './styles/App.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// Maybe remove... check later.
registerServiceWorker();
