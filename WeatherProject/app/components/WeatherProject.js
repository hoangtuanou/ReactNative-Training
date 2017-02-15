import React, {Component} from 'react';
import {
  View,
  Navigator
} from 'react-native';
import Home from './Home';
import Search from './Search';

export default class WeatherProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      forecast: [],
      isLoad: false,
      isFocus: false,
      nameOfCity: ''
    };
  }

  fetchDataForecast = (navigator) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.nameOfCity}&units=metric&cnt=16&mode=json&APPID=d47e778f4341fa1b85542cdaa5147add`)
      .then((response) => response.json())
      .then((responseJSON) => {
        let data = [];
        responseJSON.list.map((t)=>{
          data.push(t);
        });
        this.getTime(data);
        navigator.push({name:'home'});
      });
  }

  getTime = (data) => {
    let i= 0;
    let month = new Date().getMonth()+1;
    if(month<10){
      month = '0'+month;
    }
    data.forEach((t)=>{
      let timeStr = this.addDays(i++);
      t.time = {
        day: timeStr.slice(0,3),
        dateMonth: timeStr.slice(8,10).concat('/',month)
      }
    });
    this.setState({forecast:data});
    this.setState({isLoad:true});
  }

  addDays = (numDays) => {
    let dateObj = new Date();
    dateObj.setDate(dateObj.getDate()+numDays);
    return dateObj.toDateString();
  }

  onFocus = () => {
    this.setState({isFocus:true});
  }

  onChangeText = (text) => {
    this.setState({nameOfCity:text});
  }

  renderScene = (route, navigator) => {
    switch(route.name){
      case 'search':
        return (
          <Search
            navigator={navigator}
            onFocus={this.onFocus}
            isFocus={this.state.isFocus}
            onSubmitEditing={this.fetchDataForecast}
            onChangeText={this.onChangeText}
          />
        )
      case 'home':
        return (
          <Home
            navigator={navigator}
            forecast={this.state.forecast}
            nameOfCity={this.state.nameOfCity}
          />
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name:'search'}}
        renderScene={this.renderScene}
      >
      </Navigator>
    );
  }
}
