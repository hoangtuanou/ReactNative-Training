import React, {Component} from 'react';
import {
  View, Text, StyleSheet, Image, TextInput
} from 'react-native';
import Forecast from './Forecast';

export default class WeatherProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      forecast: []
    };
  }

  componentWillMount(){
    fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=Ho_Chi_Minh&units=imperial&cnt=7&mode=json&APPID=d47e778f4341fa1b85542cdaa5147add')
      .then((response) => response.json())
      .then((responseJSON) => {
        let data = [];
        responseJSON.list.map((t)=>{
          data.push(t);
        });
        this.setState({
          forecast: data
        });
      });
    this.getDayTime();
  }

  getDayTime() {
    let month = (new Date().getMonth()+1).toString();
    let timeStr = this.addDays(0);
    let dayOfWeek = timeStr.slice(0,3);
    let dayofMonth = timeStr.slice(8,10).concat('/',month);
    console.log(dayofMonth);
  }

  addDays(numDays) {
    let dateObj = new Date();
    dateObj.setDate(dateObj.getDate()+numDays);
    return dateObj.toDateString();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.blockTitle}>
          <Image
            source={require('../icons/Pointer-icon.png')}
          />
          <Text style={{marginLeft: 10, color: '#FFFFFF'}}>Ho Chi Minh</Text>
        </View>
        <View style={styles.currForecast}>
          <View style={styles.currDay}>
            <Text style={{color: '#FFFFFF'}}>Fri 29/06</Text>
            <Text style={styles.currText}>24</Text>
          </View>
          <Image 
            source={require('../icons/SunCloud-big.png')}
            style={styles.currIcon}
          />
        </View>
        <View style={styles.dailyWrapper}>
          {
            this.state.forecast.map((t, index)=>{
                if(index!=0){
                  return(<Forecast
                    key={index}
                    data={t}
                  />)
                }
              }
            )
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  blockTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cc324b',
  },
  currForecast: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 70,
    alignItems: 'center',
    backgroundColor: '#e64c65'
  },
  currDay: {
    flex: 1,
    alignItems: 'center'
  },
  currText: {
    fontSize: 60,
    lineHeight: 60,
    color: '#FFFFFF'
  },
  dailyWrapper: {
    flex: 7,
    flexDirection: 'column'
  }
});
