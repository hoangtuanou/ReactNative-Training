import React, {Component} from 'react';
import {
	View, Text, Image, StyleSheet, ListView, TouchableOpacity
} from 'react-native';
import RowForecast from './RowForecast';

export default class ForecastPage extends Component{
	constructor() {
		super();
		this.state = {currForecast:{}, activeRow: 0};
	}
	handlePress(rowID) {
		let {forecast} = this.props;
		this.setState({currForecast:forecast[rowID],activeRow: rowID});
	}
	render(){
		let {currForecast} = this.state;
		let {forecast,nameOfCity} = this.props;
		if(Object.keys(currForecast).length==0){
			currForecast = forecast[0];
		}
		const icon = currForecast.Day.Icon;
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
							<Text style={styles.currDay}>{currForecast.time.day.toUpperCase()+' '+currForecast.time.dateMonth}</Text>
							<Text style={styles.currTemp}>{Math.round(currForecast.Temperature.Maximum.Value)}&deg;</Text>
						</View>
						<Image source={{uri: `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${(icon<10)?'0'+icon:icon}-s.png`}}
							style={{width: 95,height: 65}}
						/>
					</View>
				</View>
				<View style={{flex:9}}>
					<ListView						
						dataSource={ds.cloneWithRows(forecast)}
						renderRow={(data,sectionID,rowID) => {
							return(
								<RowForecast
									data={data}
									rowID={rowID}
									activeRow={this.state.activeRow}
									handlePress={this.handlePress.bind(this)}
								/>
							)
						}}
						renderSeparator={(sectionID, rowID) => {
					    return (
					      <View
					        key={`${sectionID}-${rowID}`}
					        style={{
					          height: 1,
					          backgroundColor: 'grey',
					        }} 
					      />
					    );
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
		flex: 3,
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