import React,{Component} from 'react';
import {
	View, Text, StyleSheet, TextInput, ListView
} from 'react-native';
import Row from './Row';

export default class Search extends Component{
	renderListView = () => {
		const {listCities,onPressRow,navigator} = this.props;
		const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1!==r2});
		if(listCities.length!=0){
			return(
				<ListView
					style={styles.listView}
					dataSource={ds.cloneWithRows(listCities)}
					renderRow={(data) => <Row {...data} onPressRow={onPressRow} navigator={navigator}/>}
				/>
			)
		}
		else return
	}
	render(){
		let {isFocus,onFocus,navigator,onChangeText,listCities} = this.props;
		return(
			<View style={[styles.container,{justifyContent: isFocus?'flex-start':'center'}]}>
				<Text style={styles.text}>Search</Text>
				<TextInput
					style={styles.textInput}
					underlineColorAndroid='transparent'
					placeholder='Search for a city....'
					onFocus={onFocus}
					onChangeText={(text)=>{onChangeText(text)}}
					blurOnSubmit={false}
				/>
				{this.renderListView()}
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
	},
	listView: {
		backgroundColor: '#FFFFFF'
	}
});