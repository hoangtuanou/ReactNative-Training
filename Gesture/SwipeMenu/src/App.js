import React,{Component} from 'react';
import {View} from 'react-native';
import SwipeMenu from './SwipeMenu';

export default class App extends Component{
	render() {
		return (
			<View style={{flex: 1, backgroundColor: 'skyblue'}}>
				<SwipeMenu/>
			</View>
		)
	}
}