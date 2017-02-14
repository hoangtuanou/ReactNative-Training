/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
} from 'react-native';
import React from 'react';
import {createStore} from 'redux';
import {reducer} from './src/todoListRedux';
import TodoApp from './src/TodoApp';

const store = createStore(reducer);
const App = () => <TodoApp store={store}/>;

AppRegistry.registerComponent('TodoApp', () => App);
