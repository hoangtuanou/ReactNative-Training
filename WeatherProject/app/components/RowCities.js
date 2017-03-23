import React,{Component} from 'react'
import {
	View,Text, StyleSheet, TouchableOpacity
} from 'react-native';

export default class RowCities extends Component{
	render(){
		const {Country,LocalizedName,onPressRow,navigator,Key} = this.props;
		return(

			<TouchableOpacity style={styles.row} onPress={()=>{onPressRow(navigator,Key,LocalizedName)}}>
				<Text style={styles.text}>{LocalizedName}</Text>
				<Text style={styles.text}>[{Country.ID}]</Text>
			</TouchableOpacity>

		)
	}
}

const styles = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 5
	},
	text: {
		color: '#00b8e6',
		marginRight: 10
	}
})
