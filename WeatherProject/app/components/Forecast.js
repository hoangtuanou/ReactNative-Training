import React, {Component} from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image, TouchableOpacity
} from 'react-native';

export default class Forecast extends Component{
  render(){
    let {data} = this.props;
    let isSunday = (data.time.day == 'Sun') ? '#cc324b': '#FFFFFF';
    console.log(data);
    return(
      <TouchableOpacity style={styles.dailyForecast} activeOpacity={0.8}>
        <View style={styles.row}>
          <Text style={[styles.timeText, {color: isSunday}]}>
            {data.time.day.toUpperCase()}
          </Text>
          <Text style={{color:'#828aa8', fontSize: 15}}>
            {data.time.dateMonth}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={{fontSize: 17, color: '#FFFFFF', marginRight: 10}}>
            {Math.round(data.temp.eve)}&deg;
          </Text>
          <Image source={{uri: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`}}
            resizeMode='cover'
            style={{width: 50,height: 50}}
          />
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  dailyForecast:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#394264',
    borderBottomWidth: 0.7,
    borderColor: 'black'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  timeText: {
    marginRight: 5,
    fontSize: 15
  }
});
