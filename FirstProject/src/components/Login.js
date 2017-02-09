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
      Alert.alert('Error!!!','Your email or password isn\'t correct. Please confirm again.',[{text:'OK'}]);
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.blockContent}>
          <Text style={styles.title}>SIGN IN YOUR ACCOUNT</Text>
          <View style={styles.inputWrapper}>
            <Image style={styles.logo}/>
            <TextInput
              style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder='email'
              placeholderTextColor='#ccc'
              onChangeText={(text)=>{this.props.handleChangeText(text,'username')}}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Image style={styles.logo}/>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder='password'
              placeholderTextColor='#ccc'
              onChangeText={(text)=>{this.props.handleChangeText(text,'password')}}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={this.handleLogin.bind(this)}>
            <Text style={{color:'#FFFFFF'}}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.facebook}>
          <Image style={styles.logoFace}/>
          <Text style={{color:'#FFFFFF'}}>Sign in with Facebook</Text>
        </View>
      </View>
    )
  }
}

