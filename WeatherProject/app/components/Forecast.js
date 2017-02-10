import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Forecast extends Component{
  render(){
    console.log('render: '+this.props.data);
    return(
      <View style={styles.dailyForecast}>
        <Text style={styles.bigText}>
          {this.props.data.weather[0].main}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dailyForecast:{
    flex: 1,
    backgroundColor: '#394264'
  },
  bigText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  }
});
