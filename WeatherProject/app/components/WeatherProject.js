import React, {Component} from 'react';
import {
  View,
  Navigator,
  ListView
} from 'react-native';
import Home from './Home';
import Search from './Search';

export default class WeatherProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      forecast: [],
      isFocus: false,
      nameOfCity: '',
      listCities: []
    };
  }

  fetchDataForecast = (navigator,cityID,LocalizedName) => {
    const APIKEY = 'FWaugDBcsPGXNdH0fTZGKuiYfoN928aG';
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityID}?apikey=${APIKEY}&details=true&metric=true`)
      .then((res) => res.json())
      .then((resJSON) => {
        this.getTime(resJSON.DailyForecasts);
        navigator.push({name:'home'});
      });
    this.setState({nameOfCity:LocalizedName});
  }

  getTime = (data) => {
    let i=0;
    data.forEach((t)=>{
      let timeStr = this.addDays(i++);
      t.time = {
        day: timeStr.slice(0,3),
        dateMonth: timeStr.slice(4)
      }
    });
    this.setState({forecast:data});
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

  onFocus = () => {
    this.setState({isFocus:true});
  }

  onChangeText = (text) => {
    if(text!=''){
      fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=zOEDguz3RM6DRGh1o9UIm7dCyU4qIlKU&q=${text}&language=es`)
      .then((res)=>res.json())
      .then((resJSON)=>{
        this.setState({listCities: resJSON});
      })
    }
  }

  renderScene = (route, navigator) => {
    const {isFocus,listCities,nameOfCity,forecast} = this.state;
    switch(route.name){
      case 'search':
        return (
          <Search
            navigator={navigator}
            listCities={listCities}
            isFocus={isFocus}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onPressRow={this.fetchDataForecast}
          />
        )
      case 'home':
        return (
          <Home
            navigator={navigator}
            forecast={forecast}
            nameOfCity={nameOfCity}
          />
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name:'search'}}
        renderScene={this.renderScene}
        configureScene={(route,routeStack)=> Navigator.SceneConfigs.VerticalUpSwipeJump}
      >
      </Navigator>
    );
  }
}
