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
  Animated
} from 'react-native';

const arr= [];
for(let i=0;i<500;i++){
  arr.push(i);
}
export default class Example6 extends Component {
  constructor() {
    super();
    this.animatedValue = [];
    arr.forEach((value)=>{
      this.animatedValue[value] = new Animated.Value(0);
    });
  }
  componentDidMount() {
    this.animate();
  }
  animate() {
    const animations = arr.map((item)=>{
      console.log(item);
      return Animated.timing(
        this.animatedValue[item],
        {
          toValue: 1,
          duration: 3000
        }
      );
    });
    Animated.stagger(10,animations).start();
  }
  render() {
    return (
      <View style={styles.container}>
        {
          arr.map((a,i)=>{
            console.log(a);
            return <Animated.View
                      key={i}
                      style={[{opacity: this.animatedValue[a]},styles.square]}
                    />
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  square: {
    height: 20,
    width: 20,
    marginHorizontal: 2,
    marginVertical: 2,
    backgroundColor:'red'
  }
});

AppRegistry.registerComponent('Example6', () => Example6);
