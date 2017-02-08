import React, {Component} from 'react';
import {
  View, Text, StyleSheet, Image, TextInput
} from 'react-native';
import Forecast from './Forecast';

export default class WeatherProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      zip: '',
      forecast: null
    };
  }

  handleTextChange(e){
    let zip = e.nativeEvent.text;
    this.setState({zip});
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + zip + '&units=imperial&APPID=d47e778f4341fa1b85542cdaa5147add')
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
          }
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  render() {
    let content = null;
    if(this.state.forecast != null){
      content = <Forecast
            main={this.state.forecast.main}
            description={this.state.forecast.description}
            temp={this.state.forecast.temp}
          />
    }
    return (
      <View style={styles.container}>
        <View style={styles.overlay}>
          <View style={styles.row}>
            <Text style={styles.mainText}>
              Current weather for
            </Text>
            <View style={styles.zipContainer}>
              <TextInput
                style={styles.zipCode,{flex:1,color:'#FFFFFF'}}
                returnKeyType='go'
                onSubmitEditing={this.handleTextChange.bind(this)}
              />
            </View>
          </View>
          {content}
        </View>
      </View>
    );
  }
}
const baseFontSize = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    height: 40
  },
  zipCode: {
    width: 100,
    height: 50,
    borderColor: 'blue',
    borderWidth: 1
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF',
    borderColor: '#DDDDDD',
    borderWidth: 1
  }
});
