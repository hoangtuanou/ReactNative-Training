import React, {Component} from 'react';
import {
  View, Text, TouchableHighlight, AsyncStorage, StyleSheet
} from 'react-native';
import {styles} from '../styles';

export default class Home extends Component{

  onLogOut(){
    AsyncStorage.removeItem('data');
    this.props.navigator.resetTo({
      name:'login'
    });
    this.props.clearState();
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.blockContent}>
          <Text>Welcome {this.props.state.username}!!!</Text>
          <TouchableHighlight style={styles.btn} onPress={this.onLogOut.bind(this)}>
            <Text>Log Out</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

