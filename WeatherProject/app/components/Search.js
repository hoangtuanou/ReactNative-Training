import React,{Component} from 'react';
import {
	View, Text, StyleSheet, TextInput, TouchableOpacity, Image
} from 'react-native';


export default class Search extends Component{
	constructor(){
		super();
		this.state={text:''};
	}
	renderForecast = () => {
		let {forecast,navigator,onPress} = this.props;
		let currForecast = forecast[0];
		if(forecast.length!=0){
			return(
				<TouchableOpacity
					onPress={()=>{navigator.push({name:'home'})}}
					style={styles.wrapper}
				>
					<Image 
						source={{uri: `http://openweathermap.org/img/w/${currForecast.weather[0].icon}.png`}}
						style={{width: 100,height:100}}/>
					<Text style={[styles.text,{fontSize: 40,marginTop: 10}]}>{currForecast.temp.eve}&deg;</Text>
					<Text style={styles.text}>{currForecast.cityName}</Text>
					<Text style={[styles.text,{fontSize: 25,marginVertical: 20}]}>{currForecast.weather[0].main}</Text>
				</TouchableOpacity>
			)
		}
	}
	render(){
		let {onSubmitEditing,onChangeText} = this.props;
		return(
			<View style={styles.container}>
				{this.renderForecast()}
				<TextInput
					style={styles.textInput}
					underlineColorAndroid='transparent'
					placeholder='Search for a city....'
					onChangeText={(text)=>{this.setState({text})}}
					onSubmitEditing={(text)=>{onSubmitEditing(this.state.text)}}
					blurOnSubmit={false}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: '#394264',
		justifyContent: 'center'
	},
	wrapper: {
		alignItems: 'center'
	},
	text:{
		color: '#FFFFFF'
	},
	textInput: {
		marginHorizontal: 10,
		backgroundColor: '#FFFFFF'
	}
});