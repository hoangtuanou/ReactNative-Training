import React, {Component} from 'react';
import {
  View,
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
    fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=Ho_Chi_Minh&units=metric&cnt=16&mode=json&APPID=d47e778f4341fa1b85542cdaa5147add')
      .then((response) => response.json())
      .then((responseJSON) => {
        let data = [];
        responseJSON.list.map((t)=>{
          data.push(t);
        });
        this.getTime(data);
      });
  }

  getTime(data) {
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
