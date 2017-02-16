import React, {Component} from 'react';
import {
	View, Text, Image, StyleSheet, ScrollView, TouchableOpacity
} from 'react-native';
import Forecast from './Forecast';

export default class Home extends Component{
	render(){
		let {forecast} = this.props;
		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity style={styles.backButton} onPress={()=>this.props.navigator.pop()}>
						<Text style={{color:'#FFFFFF'}}>Back</Text>
					</TouchableOpacity>
					<View style={styles.title}>
						<Image source={require('../icons/Pointer-icon.png')}/>
						<Text style={styles.titleText}>{forecast[0].cityName}</Text>
					</View>
				</View>
				<View style={styles.blockCurr}>
					<View style={styles.wrapper}>
						<View>
							<Text style={styles.currDay}>{forecast[0].time.day.toUpperCase()+' '+forecast[0].time.dateMonth}</Text>
							<Text style={styles.currTemp}>{Math.round(forecast[0].temp.eve)}&deg;</Text>
						</View>
						<Image
							source={{uri: `http://openweathermap.org/img/w/${forecast[0].weather[0].icon}.png`}}
	            resizeMode='cover'
	            style={{width: 100,height: 100}}
						/>
					</View>
				</View>
				<View style={{flex:9}}>
					<ScrollView						
						automaticallyAdjustContentInsets={false}
					>
						{
							forecast.map((t, index)=>{
									if(index!=0){
										return(
											<Forecast
												key={index}
												data={t}
												renderIcon={this.renderIcon}
											/>
										);
									}
								}
							)
						}
					</ScrollView>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1
	},
	header: {
		flex: 1,
		backgroundColor: '#cc324b',
		flexDirection: 'row',
		alignItems: 'center'
	},
	title: {
		flex: 2,
		flexDirection: 'row',
		alignItems: 'center'
	},
	titleText: {
		color: '#FFFFFF',
		fontSize: 20,
		marginLeft: 15
	},
	blockCurr: {
		flex: 2,
		backgroundColor: '#e64c65',
		alignItems: 'center',
		paddingVertical: 20
	},
	wrapper: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	currDay: {
		color: '#FFFFFF',
		marginBottom: -15
	},
	currTemp: {
		color: '#FFFFFF',
		fontSize: 70
	},
	backButton: {
		flex: 1,
		marginLeft: 20
	}
});