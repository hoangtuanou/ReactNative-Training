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
  TouchableOpacity,
  Animated
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const colors = ['#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F'];
const animations = ['fadeInUpBig', 'shake', 'bounceInLeft', 'lightSpeedIn'];

export default class Example1 extends Component {
  constructor(props){
    super(props);
    this.state = ({animation:animations[0]});
  }
  nextAnimation(){
    const {animation}=this.state;
    const nextIndex = animations.indexOf(animation)+1;
    this.setState({animation: animations[nextIndex]});
  }
  render() {
    return (
      <TouchableOpacity
        key={this.state.animation}
        onPress={this.nextAnimation.bind(this)}
      >
        {
          colors.map((color, i)=>{
            const {animation}=this.state;
            return (
              <Animatable.View
                key={i}
                animation={animation}
                delay={i*300}
                style={[styles.button,{backgroundColor:color}]}
              >
                <Text style={styles.text}>{i}</Text>
              </Animatable.View>
            )
          })
        }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20
  }
});

AppRegistry.registerComponent('Example1', () => Example1);
