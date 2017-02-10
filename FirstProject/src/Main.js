import React,{Component} from 'react';
import {
  View, Text, Navigator
} from 'react-native';
import Login from './components/Login';
import Home from './components/Home';

export default class Main extends Component{

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      isFocusUsername:false,
      isFocusPass:false
    };
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(text, inputType){
    if(inputType == 'username'){
      this.setState({username: text});
    }
    else{
      this.setState({password: text});
    }
  }

  onFocus(inputType){
    if(inputType == 'isFocusUsername'){
      this.setState({isFocusUsername: true});
    }
    else{
      this.setState({isFocusPass: true});
    }
  }
  clearState(){
    this.setState({
      username:'',
      password:''
    });
  }
  clearStateFocus(){
    this.setState({
      isFocusUsername:false,
      isFocusPass:false
    });
  }
  renderScene(route,navigator) {
    if(route.name == 'login'){
      return <Login
            handleChangeText={this.handleChangeText}
            state={this.state}
            navigator={navigator}
            onFocus={this.onFocus.bind(this)}
            clearState={this.clearState.bind(this)}
            clearStateFocus={this.clearStateFocus.bind(this)}
          />
    }
    if(route.name == 'home'){
      return <Home 
            navigator={navigator}
            clearState={this.clearState.bind(this)}
            state={this.state}
          />
    }
  }

  render(){
    return(
      <Navigator
        initialRoute={{name:'login'}}
        renderScene={this.renderScene.bind(this)}
      >
      </Navigator>
    )
  }
}
