import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class Detail extends Component{
  render() {
    return (
      <View>
        <Text>{this.props.navigation.state.key}</Text>
        <Text>{this.props.navigation.state.params.name}</Text>
      </View>
    )
  }
}
