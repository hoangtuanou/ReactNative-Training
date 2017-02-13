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
  TouchableOpacity,
  Animated
} from 'react-native';

const AnimatedTouchableOpacity = Animated.View;

export default class BasicExample extends Component {
  constructor(props){
    super(props);
    this.state=({height: new Animated.Value(100)});
  }

  componentDidMount() {
    this.startAnimation()
  }

  startAnimation() {
    const {height} = this.state;
    console.log(height);
    height.setValue(100);
    Animated.spring(height, {toValue: 300, friction: 0.8}).start();
  }

  render() {
    const {height} = this.state;
    return (
      <AnimatedTouchableOpacity style={{backgroundColor: 'pink', height}}>
        <TouchableOpacity
          onPress={this.startAnimation.bind(this)}
          style={styles.button}
        >
          <Text style={styles.text}>
            Tap Me
          </Text>
        </TouchableOpacity>
      </AnimatedTouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 40
  }
});

AppRegistry.registerComponent('BasicExample', () => BasicExample);
