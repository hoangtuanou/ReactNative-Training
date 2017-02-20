import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import Home from './Home';
import Load from './Load';

const months = {

}
export default class WeatherProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      forecast: [],
      isLoad: false
    };
  }

  componentWillMount(){
    fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=Tokyo&units=metric&cnt=10&mode=json&APPID=d47e778f4341fa1b85542cdaa5147add')
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
    data.forEach((t)=>{
      let timeStr = this.addDays(i++);
      t.time = {
        day: timeStr.slice(0,3),
        dateMonth: timeStr.slice(4)
      }
    });
    this.setState({forecast:data});
    this.setState({isLoad:true});
  }

  addDays(numDays) {
    let dateObj = new Date();
    dateObj.setDate(dateObj.getDate()+numDays);
    let month = dateObj. getMonth()+1;
    month = (month<10)?'0'+month:month.toString();
    let timeStr = dateObj.toDateString('dd-mm-yy');
    let dateMonth = timeStr.slice(8,10).concat('/',month);
    return timeStr.slice(0,3).concat(' ',dateMonth);
  }

  renderLoading() {
    if(this.state.isLoad){
      return <Home forecast={this.state.forecast}/>;
    }
    else{
      return <Load/>;
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
