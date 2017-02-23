import React,{ Component } from 'react';
import { Image,StyleSheet,StatusBar,Text,TouchableHighlight,PanResponder,LayoutAnimation,ScrollView,View } from 'react-native';
import Map from './Map';
import Util from './utils';
import Icon from 'react-native-vector-icons/FontAwesome';

class Menu extends Component{
  render() {
    return(
      <View style={styles.sideMenuContainer}>
        <Image source={{uri:'map'}} style={styles.img}></Image>
        <View style={styles.btnContainer}>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="map-marker" size={15}></Icon>
              <Text style={styles.btnText}>Your place</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="pencil-square" size={15}></Icon>
              <Text style={styles.btnText}>Your contribution</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="product-hunt" size={15}></Icon>
              <Text style={styles.btnText}>Offline area</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.btnContainer}>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="road" size={15}></Icon>
              <Text style={styles.btnText}>Real time traffic</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="bus" size={15}></Icon>
              <Text style={styles.btnText}>Bus routes</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="bicycle" size={15}></Icon>
              <Text style={styles.btnText}>Ride line</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="photo" size={15}></Icon>
              <Text style={styles.btnText}>Satellite image</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <Icon style={styles.btnIcon} name="tree" size={15}></Icon>
              <Text style={styles.btnText}>Terrain</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default class App extends Component{
  constructor() {
    super();
    this.state = {
      showDrop:false
    }
  }

  _previousLeft = -0.7*Util.size.width-10;
  _previousOpacity = 0;
  _minLeft = -0.7*Util.size.width-10;
  _menuStyles = {};
  _dropStyle = {};

  _updatePosition() {
    this.menu.setNativeProps(this._menuStyles);
    this.drop.setNativeProps(this._dropStyles);
  }

  _endMove(evt, gestureState) {
    if (gestureState.vx<0||gestureState.dx<0){
      this._menuStyles.style.left = this._minLeft;
      this._dropStyles.style.opacity = 0;
      this._previousLeft = this._minLeft;
      this._previousOpacity = 0;
      this.setState({
        showDrop:false
      })
    }
    if(gestureState.vx>0||gestureState.dx>0){
      this._menuStyles.style.left = 0;
      this._dropStyles.style.opacity = 1;
      this._previousLeft = 0;
      this._previousOpacity = 1;
    }
    this._updatePosition();
    
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      
      onPanResponderGrant: (evt, gestureState) => {
          this.setState({
            showDrop:true
          })
      },
      onPanResponderMove: (evt, gestureState) => {
        this._menuStyles.style.left = this._previousLeft + gestureState.dx;
        this._dropStyles.style.opacity = this._previousOpacity+Math.pow(gestureState.dx/(-this._minLeft),0.5);
        if (this._menuStyles.style.left>0) {
          this._menuStyles.style.left = 0;
          this._dropStyles.style.opacity = 1;
        };
        if (this._menuStyles.style.left < this._minLeft) {
          this._menuStyles.style.left = this._minLeft;
          this._dropStyles.style.opacity = 0;
        };
        this._updatePosition();

      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => this._endMove(evt, gestureState),
      onPanResponderTerminate: (evt, gestureState) => this._endMove(evt, gestureState),
      onShouldBlockNativeResponder: (event, gestureState) => true,
    });

    this._menuStyles = {
      style: {
        left: this._previousLeft,
      },
    };
    this._dropStyles = {
      style: {
        opacity: this._previousOpacity,
      },
    };

  }



  render () {
    return(
      <View style={styles.container}>
        <Map></Map>
        {this.state.showDrop?<View style={styles.drop}  ref={(drop) => {this.drop = drop;}}></View>:<View></View>}
        <View {...this._panResponder.panHandlers} style={styles.sideMenu} ref={(menu) => {this.menu = menu;}}>
          <Menu/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:Util.size.height,
    width: Util.size.width,
  },
  map:{
    width: Util.size.width,
    height: Util.size.height
  },
  sideMenu:{
    height: Util.size.height,
    width: 0.7*Util.size.width+20,
    position:"absolute",
    top:0,
    backgroundColor:"transparent",
    left: -0.7*Util.size.width-10,
    borderColor: 'red',
    borderWidth: 1
  },
  sideMenuContainer:{
    height: Util.size.height,
    width: 0.7*Util.size.width,
    backgroundColor:"#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 2
    }
  },
  drop:{
    height: Util.size.height,
    width: Util.size.width,
    position:"absolute",
    top:0,
    left:0,
    opacity:0,
    backgroundColor:"rgba(0,0,0,0.6)"
  },
  img:{
    width: 0.7*Util.size.width,
    resizeMode:"contain",
    height:0.7*Util.size.width/1.754,
  },
  btn:{
    flexDirection:"row",
    alignItems:"center",
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:"#fff"
  },
  btnIcon:{
    flex:1,
    textAlign:"center",
    color:"#555"
  },
  btnText:{
    flex:3,
    fontSize:14,
    fontWeight:"500",
    paddingLeft:20,
    color:"#454545"
  },
  btnContainer:{
    paddingTop:10,
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#bbb"
  },
});