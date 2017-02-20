import React, {Component} from 'react';
import {
	View, Text, Image, StyleSheet, ListView
} from 'react-native';
import Forecast from './Forecast';

export default class Home extends Component{
	constructor() {
		super();
		this.state = {currForecast:{}, activeRow: 0};
	}
	handlePress(rowID) {
		let {forecast} = this.props;
		this.setState({currForecast:forecast[rowID],activeRow: rowID});
	}
	render(){
		let {forecast} = this.props;
		let {currForecast} = this.state;
		if(Object.keys(currForecast).length==0){
			currForecast = forecast[0];
		}
		const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1!==r2});
		return(
			<View style={styles.container}>
				<View style={styles.title}>
					<Image source={require('../icons/Pointer-icon.png')}/>
					<Text style={styles.titleText}>Tokyo</Text>
				</View>
				<View style={styles.blockCurr}>
					<View style={styles.wrapper}>
						<View>
							<Text style={styles.currDay}>{currForecast.time.day.toUpperCase()+' '+currForecast.time.dateMonth}</Text>
							<Text style={styles.currTemp}>{Math.round(currForecast.temp.eve)}&deg;</Text>
						</View>
						<Image
	            source={{uri: `http://openweathermap.org/img/w/${currForecast.weather[0].icon}.png`}}
	            resizeMode='cover'
	            style={{width: 100,height: 100}}
	          />
					</View>
				</View>
				<View style={{flex:9}}>
					<ListView						
						dataSource={ds.cloneWithRows(forecast)}
						renderRow={(data, sectionID, rowID)=>{
								return (<Forecast
									data={data}
									sectionID={sectionID}
									rowID={rowID}
									activeRow={this.state.activeRow}
									handlePress={this.handlePress.bind(this)}
								/>);
							}
						}
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
	title: {
		flex: 1,
		backgroundColor: '#cc324b',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	titleText: {
		color: '#FFFFFF',
		fontSize: 20,
		marginLeft: 15
	},
	blockCurr: {
		flex: 3,
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
	}
});