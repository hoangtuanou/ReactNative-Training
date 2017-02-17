import React, {Component} from 'react';
import {
	View, Text, Image, StyleSheet, ListView
} from 'react-native';
import Forecast from './Forecast';

export default class Home extends Component{
	renderIcon(weather) {
    let icon;

    switch(weather){
      case 'Clouds':
        icon = <Image source={require('./../icons/Clouds.png')}/>;
        break;
      case 'Clear':
        icon = <Image source={require('./../icons/Clear.png')}/>;
        break;
      default:
        icon = <Image source={require('./../icons/Clouds-icon.png')}/>;;
    }

    return icon;
	}
	render(){
		let {forecast} = this.props;
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
							<Text style={styles.currDay}>{forecast[0].time.day.toUpperCase()+' '+forecast[0].time.dateMonth}</Text>
							<Text style={styles.currTemp}>{Math.round(forecast[0].temp.eve)}&deg;</Text>
						</View>
						<Image source={require('./../icons/SunCloud-big.png')}
							resizeMode='contain'
						/>
					</View>
				</View>
				<View style={{flex:9}}>
					<ListView						
						dataSource={ds.cloneWithRows(forecast)}
						renderRow={(data, sectionID, rowID, highlightRow)=>{
								if(rowID!=0){
									return (<Forecast
										data={data}
										sectionID={sectionID}
										rowID={rowID}
										highlightRow={highlightRow}
										renderIcon={this.renderIcon.bind(this)}
									/>);
								}
								else{
									return null;
								}
							}
						}
						renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => {
					    return (
					      <View
					        key={`${sectionID}-${rowID}`}
					        style={{
					          height: 1,
					          backgroundColor: adjacentRowHighlighted ? 'black' : 'grey',
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