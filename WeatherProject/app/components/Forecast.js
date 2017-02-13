import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Forecast extends Component{
  render(){
    let {data} = this.props;
    return(
      <View style={styles.dailyForecast}>
        <View>
          <Text>{data.time.day + " " + data.time.dateMonth}</Text>
        </View>
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
