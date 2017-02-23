/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React,{ Component } from 'react';
import { Platform,Image,StatusBar,StyleSheet,Text,TouchableHighlight,View, AppRegistry, Alert } from 'react-native';
import Util from './utils';
import MapView from 'react-native-maps';

export default class Day5 extends Component{
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  
  componentDidMount() {
    if(Platform.OS === "ios"){
      StatusBar.setBarStyle(0);
    }
  }

  onRegionChange(region) {
    this.setState({region});
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        this.setState({region});
      },
      (error) => {
        Alert.alert('Error',error.message);
      },
      {timeout: 20000, maximumAge: 1000}
    )
  }

  render() {
    return(
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
        />
        <TouchableHighlight underlayColor="#00bd03" style={styles.btn} onPress={() => this.getLocation()}>
          <Text style={styles.btnText}>Find my location</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: "center"
  },
  map:{
    width: Util.size.width,
    height: Util.size.height-120
  },
  btn:{
    backgroundColor:"#00a803",
    width: Util.size.width-80,
    height: 40,
    borderWidth:Util.pixel,
    borderColor: "#009302",
    borderRadius: 4,
    justifyContent:"center",
    marginTop:10
  },
  btnText:{
    textAlign:"center",
    fontSize:18,
    color:"#fff"
  },
});

AppRegistry.registerComponent('Day5', () => Day5);
