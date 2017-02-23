import React,{Component} from 'react';
import {
	View, Text, TouchableHighlight, StyleSheet
} from 'react-native';
import Util from './utils';

export default class WatchControl extends Component{
	constructor() {
		super();
		this.state = {
			watchOn: false,
			startBtnText: 'Start',
			startBtnColor: '#60B644',
			stopBtnText: 'Clear',
			underlayColor: '#fff'
		};
	}

	startWatch() {
		console.log('touched');
		if(!this.state.watchOn){
			console.log('start');
			this.props.startWatch();
			this.setState({
				startBtnText: 'Pause',
				startBtnColor: '#ff0044',
				stopBtnText: 'Capture',
				underlayColor: '#eee',
				watchOn: true
			});
		}
		else{
			console.log('stop');
			this.props.stopWatch();
			this.setState({
				startBtnText: 'Start',
				startBtnColor: '#60B644',
				stopBtnText: 'Clear',
				underlayColor: '#eee',
				watchOn: false
			});
		}
	}

	addRecord() {
		console.log(this.state.watchOn);
		if(this.state.watchOn){
			this.props.addRecord();
		}
		else{
			this.props.clearRecord();
		}
	}

	render() {
		return (
			<View style={styles.watchControlContainer}>
				<View style={{flex:1, alignItems: 'flex-start'}}>
					<TouchableHighlight
						style={styles.btnStop}
						underlayColor={this.state.underlayColor}
						onPress={()=>this.addRecord()}
					>
						<Text style={styles.btnStopText}>{this.state.stopBtnText}</Text>
					</TouchableHighlight>
				</View>
				<View style={{flex:1,alignItems:'flex-end'}}>
					<TouchableHighlight
						style={styles.btnStart}
						underlayColor='#eee'
						onPress={()=>this.startWatch()}
					>
						<Text style={[styles.btnStartText,{color:this.state.startBtnColor}]}>
							{this.state.startBtnText}
						</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	watchControlContainer:{
    width: Util.size.width,
    height: 100,
    flexDirection:"row",
    backgroundColor: '#f3f3f3',
    paddingTop: 30, paddingLeft: 60, paddingRight:60, paddingBottom:0,
  },
  btnStart:{
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  btnStop:{
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  btnStartText:{
    fontSize:14,
    backgroundColor:"transparent"
  },
  btnStopText:{
    fontSize:14,
    backgroundColor:"transparent",
    color:"#555"
  }
})