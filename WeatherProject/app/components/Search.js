import React,{Component} from 'react';
import {
	View, Text, StyleSheet, TextInput
} from 'react-native';


export default class Search extends Component{
	render(){
		let {isFocus,onSubmitEditing,onFocus,navigator,onChangeText} = this.props;
		let textInput;
		return(
			<View style={[styles.container,{justifyContent: isFocus?'flex-start':'center'}]}>
				<Text style={styles.text}>Search</Text>
				<TextInput
					ref={(e)=>{textInput=e;}}
					style={styles.textInput}
					underlineColorAndroid='transparent'
					placeholder='Search for a city....'
					onFocus={onFocus}
					onChangeText={(text)=>{onChangeText(text)}}
					onSubmitEditing={()=>{onSubmitEditing(navigator)}}
					blurOnSubmit={false}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: '#394264'
	},
	text:{
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: 40
	},
	textInput: {
		marginHorizontal: 10,
		backgroundColor: '#FFFFFF'
	}
});