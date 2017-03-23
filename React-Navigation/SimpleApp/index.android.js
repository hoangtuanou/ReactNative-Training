/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import Home from './src/Home';
import Detail from './src/Detail';

const AppNavigator = StackNavigator({
  Home: {screen: Home},
  Detail: {screen: Detail}
},{
  initialRouteName: 'Home'
})

AppRegistry.registerComponent('SimpleApp', () => AppNavigator);
