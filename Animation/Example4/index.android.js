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
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native';

export default class Example4 extends Component {
  constructor() {
    super();
    this.animateValue = new Animated.Value(0);
  }
  componentDidMount() {
    this.animate();
  }
  animate() {
    this.animateValue.setValue(0);
    Animated.timing(
      this.animateValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(()=>this.animate());
  }
  render() {
    const marginLeft = this.animateValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    });
    const opacity = this.animateValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });
    const movingMargin = this.animateValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    });
    const textSize = this.animateValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    });
    const rotateX = this.animateValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    });
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            marginLeft,
            height: 30,
            width: 40,
            backgroundColor: 'red'
          }}
        />
        <Animated.View
          style={{
            opacity,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'blue'
          }}
        />
        <Animated.View
          style={{
            marginLeft: movingMargin,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'orange'
          }}
        />
        <Animated.Text
          style={{
            fontSize: textSize,
            marginTop: 10,
            color: 'green'
          }}
        >
          Animated Text
        </Animated.Text>
        <Animated.View
          style={{
            transform: [{rotateX}],
            marginTop: 50,
            height: 50,
            width: 60,
            backgroundColor: 'black'
          }}
        >
          <Text style={{color: 'white'}}>TransformX</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Example4', () => Example4);
