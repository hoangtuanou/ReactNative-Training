/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import App from './app/components/App';
import store from './app/store';

const AppWithStore = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)
AppRegistry.registerComponent('WeatherProject', () => AppWithStore);
