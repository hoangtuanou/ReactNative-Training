import React, {Component} from 'react';
import {
  View,
  Navigator,
  ListView
} from 'react-native';
import ForecastPage from './ForecastPage';
import Search from './Search';

export default class WeatherProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFocus: false,
      nameOfCity: ''
    };
  }

  fetchDataForecast = (navigator,cityID, nameOfCity) => {
    this.props.fetchForecast(cityID, navigator);
    this.setState({nameOfCity});
  }

  onFocus = () => {
    this.setState({isFocus:true});
  }

  onChangeText = (text) => {
    if (text != ''){
      this.props.fetchCities(text);
    }
  }

  renderScene = (route, navigator) => {
    const {isFocus,nameOfCity} = this.state;
    const {listCities, forecast} = this.props;
    console.log(this.props);
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
          <ForecastPage
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
