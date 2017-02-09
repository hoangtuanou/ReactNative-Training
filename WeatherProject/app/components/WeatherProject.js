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
      forecast: []
    };
  }

  handleTextChange(e){
    let zip = e.nativeEvent.text;
    this.setState({zip});
    fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + zip + '&units=imperial&cnt=7&mode=json&APPID=d47e778f4341fa1b85542cdaa5147add')
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        let data = [];
        responseJSON.list.map((t)=>{
          data.push(t);
        });
        this.setState({
          forecast: data
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  render() {

    return (
      <View style={styles.container}>
        <Image
          source={require('../img/background.png')}
          resizeMode='cover'
          style={styles.backdrop}
        >
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={[styles.mainText,{paddingTop:10,paddingLeft:5}]}>
                Current weather for
              </Text>
              <View style={styles.zipContainer}>
                <TextInput
                  style={[styles.zipCode,styles.mainText]}
                  returnKeyType='go'
                  onSubmitEditing={this.handleTextChange.bind(this)}
                />
              </View>
            </View>
          </View>
          <View>
            {
              this.state.forecast.map((t,id)=>
                <Forecast
                  key={id}
                  data={t}
                />
              )
            }
          </View>
        </Image>
      </View>
    );
  }
}
const baseFontSize = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
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
    paddingVertical: 50,
    paddingHorizontal: 200
  },
  zipContainer: {
    flex: 1,
    marginLeft: 5,
    height: 50
  },
  zipCode: {
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1
  },
  mainText: {
    flex: 1,
    height: 40,
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
});
