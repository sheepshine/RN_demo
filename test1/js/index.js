import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/index';

import App from './containers/app';

const store = configureStore();

export default class test3 extends Component {
  render() {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
  }
}