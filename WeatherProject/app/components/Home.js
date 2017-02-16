import React, {Component} from 'react';
import {
	View, Text, Image, StyleSheet, ListView, TouchableOpacity
} from 'react-native';
import Forecast from './Forecast';

export default class Home extends Component{
	renderIcon(icon) {
    let image;
    switch(icon){
      case 18:
        image = <Image source={require('./../icons/Clouds-icon.png')}/>;
        break;
      case 3:
        image = <Image source={require('./../icons/Clear.png')}/>;
        break;
      default:
        image = <Image source={require('./../icons/Clouds.png')}/>;;
    }

    return image;
	}

	render(){
		let {forecast,nameOfCity} = this.props;
		let todayForecast = forecast.shift();
		const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1!==r2});
		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity style={styles.backButton} onPress={()=>this.props.navigator.popToTop()}>
						<Text style={{color:'#FFFFFF'}}>Back</Text>
					</TouchableOpacity>
					<View style={styles.title}>
						<Image source={require('../icons/Pointer-icon.png')}/>
						<Text style={styles.titleText}>{nameOfCity}</Text>
					</View>
				</View>
				<View style={styles.blockCurr}>
					<View style={styles.wrapper}>
						<View>
							<Text style={styles.currDay}>{todayForecast.time.day.toUpperCase()+' '+todayForecast.time.dateMonth}</Text>
							<Text style={styles.currTemp}>{Math.round(todayForecast.Temperature.Maximum.Value)}&deg;</Text>
						</View>
						<Image source={require('./../icons/SunCloud-big.png')}
							resizeMode='contain'
						/>
					</View>
				</View>
				<View style={{flex:9}}>
					<ListView						
						dataSource={ds.cloneWithRows(forecast)}
						renderRow={(data) => {
							return(
								<Forecast
									{...data}
									renderIcon={this.renderIcon}
								/>
							)
						}}
					/>
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