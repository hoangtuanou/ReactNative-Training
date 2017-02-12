import React, {Component} from 'react';
import {
  View, Text, StyleSheet, Image, TextInput
} from 'react-native';
import Home from './Home';
import Load from './Load';

export default class WeatherProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      forecast: [],
      isLoad: false
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
      })
      .then(()=>{
        this.getTime();
      });
  }

  getTime() {
    let i= 0;
    let dateObj = {};
    let {forecast} = this.state;
    let timeStr = this.addDays(i);
    let month = new Date().getMonth()+1;
    forecast.forEach((t)=>{
      dateObj = {
        day: timeStr.slice(0,3),
        dateMonth: timeStr.slice(8,10).concat('/',month.toString())
      }
      t.time = dateObj;
    });
    this.setState({forecast});
    this.setState({isLoad:true});
  }

  addDays(numDays) {
    let dateObj = new Date();
    dateObj.setDate(dateObj.getDate()+numDays);
    return dateObj.toDateString();
  }

  renderLoading() {
    if(this.state.isLoad){
      return(
        <Home
          state={this.state}
        />
      );
    }
    else{
      return(
        <Load/>
      );
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        {
          this.renderLoading()
        }
      </View>
    );
  }
}
