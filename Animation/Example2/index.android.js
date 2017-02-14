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
  PanResponder
} from 'react-native';

export default class Example2 extends Component {

  state = {
    dragging: false,
    initialTop: 50,
    initialLeft: 50,
    offsetTop: 0,
    offsetLeft: 0
  };

  panResponder = {};

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd
    })
  }

  handleStartShouldSetPanResponder = (e, gestureState) => {
    return true;
  }

  handlePanResponderGrant = (e, gestureState) => {
    this.setState({dragging: true});
  }

  handlePanResponderMove = (e, gestureState) => {
    console.log('PanResponder move: ' + e);
    this.setState({
      offsetTop: gestureState.dy,
      offsetLeft: gestureState.dx
    })
  }

  handlePanResponderEnd = (e, gestureState) => {
    const {initialTop,initialLeft} = this.state;
    this.setState({
      dragging: false,
      initialTop: initialTop + gestureState.dy,
      initialLeft: initialLeft + gestureState.dx,
      offsetTop: 0,
      offsetLeft: 0
    });
  }

  render() {
    const {dragging,initialTop,initialLeft,offsetTop,offsetLeft} = this.state;

    const style = {
      backgroundColor: dragging ? 'skyblue':'steelblue',
      top: initialTop+offsetTop,
      left: initialLeft+offsetLeft
    };

    return (
      <View style={styles.container}>
        <View
          {...this.panResponder.panHandlers}
          style={[styles.square, style]}
        >
          <Text style={styles.text}>
            Drag Me
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  square: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
  }
});

AppRegistry.registerComponent('Example2', () => Example2);
