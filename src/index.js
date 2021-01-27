import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.react';
import { Provider } from 'react-redux';
import { store } from './store'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

