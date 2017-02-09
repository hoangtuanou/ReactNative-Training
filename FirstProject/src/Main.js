import React,{Component} from 'react';
import {
  View, Text, Navigator
} from 'react-native';
import Login from './components/Login';
import Home from './components/Home';

export default class Main extends Component{

  constructor(props){
    super(props);
    this.state={username:'',password:''};
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

  renderScene(route,navigator) {
    if(route.name == 'login'){
      return <Login
            handleChangeText={this.handleChangeText}
            state={this.state}
            navigator={navigator}
          />
    }
    if(route.name == 'home'){
      return <Home 
            navigator={navigator}
            clearState={()=>{this.setState({username:'',password:''})}}
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
