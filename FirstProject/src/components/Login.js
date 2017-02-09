import React, {Component} from 'react';
import {
  View, Text, TextInput, TouchableHighlight, AsyncStorage, TouchableOpacity, StyleSheet, Image, Alert
} from 'react-native';
import {styles} from '../styles';

export default class Login extends Component{

  componentWillMount(){
    AsyncStorage.getItem('data').then((data)=>{
      if(data!=null){
        let value = JSON.parse(data);
        this.props.handleChangeText(value.username,'username');
        this.props.handleChangeText(value.password,'password');
        this.props.navigator.push({name:'home'});
      }
    })
  }

  handleLogin(){
    let username = this.props.state.username;
    let password = this.props.state.password;
    if(username == 'tuan.tha' && password == 'frontend')
    {
      this.props.navigator.push({name:'home'});
      AsyncStorage.setItem('data',JSON.stringify(this.props.state));
    }
    else{
      Alert.alert('Error!!!','Your email or password isn\'t correct. Please sign in again.',[{text:'OK'}]);
    }
  }

  render(){
    let focusUsername = this.props.state.isFocusUsername ? '#11a8ab':'black';
    let focusPass = this.props.state.isFocusPass ? '#11a8ab':'black';
    return(
      <View style={styles.container}>
        <View style={styles.blockContent}>
          <Text style={styles.title}>SIGN IN YOUR ACCOUNT</Text>
          <View style={[styles.inputWrapper,{borderColor:focusUsername}]}>
            <Image
              style={styles.logo}
              source={require('../icons/Mail-Icon.png')}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder='email'
              placeholderTextColor='#ccc'
              onChangeText={(text)=>{this.props.handleChangeText(text,'username')}}
              onFocus={()=>{this.props.onFocus('isFocusUsername')}}
              onBlur={()=>{this.props.clearState()}}
            />
          </View>
          <View style={[styles.inputWrapper,{borderColor:focusPass}]}>
            <Image
              style={styles.logo}
              source={require('../icons/Lock-icon.png')}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder='password'
              placeholderTextColor='#ccc'
              onChangeText={(text)=>{this.props.handleChangeText(text,'password')}}
              onFocus={()=>{this.props.onFocus('isFocusPass')}}
              onBlur={()=>{this.props.clearState()}}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={this.handleLogin.bind(this)}>
            <Text style={{color:'#FFFFFF'}}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color:'#ccc'}}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.facebook}>
          <Image
              style={styles.logo}
              source={require('../icons/Facebook-Icon.png')}
            />
          <Text style={{color:'#FFFFFF'}}>Sign in with Facebook</Text>
        </View>
      </View>
    )
  }
}

