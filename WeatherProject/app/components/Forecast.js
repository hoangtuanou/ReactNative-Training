import React, {Component} from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image, TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class Forecast extends Component{
  render(){
    let {data, rowID, handlePress, activeRow} = this.props;
    const icon = (data.Day.Icon<10)?'0'+data.Day.Icon:data.Day.Icon;
    let isSunday = (data.time.day == 'Sun') ? '#cc324b': '#FFFFFF';
    return(
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={()=>{
          handlePress(rowID);
          this.refs.view.pulse(800);
        }}
      >
        <Animatable.View
          ref='view'
          style={[styles.dailyForecast,{backgroundColor: (rowID==activeRow)?'#bfbfbf':'#394264'}]}
          easing = 'ease-out'
          animation = 'pulse'
          delay={rowID*200}
        >
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
              {Math.round(data.Temperature.Maximum.Value)}&deg;
            </Text>
            <Image 
              source={{uri: `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${icon}-s.png`}}
              style={{width: 55,height: 35}}
              />
          </View>
        </Animatable.View>
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
    paddingHorizontal: 20
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
