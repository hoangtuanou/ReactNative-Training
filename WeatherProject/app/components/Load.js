import React,{Component} from 'react';
import {
	View, Text, StyleSheet, Image
} from 'react-native';

const Load = () => (
	<View style={styles.container}>
		<Image source={require('./../icons/loader.gif')} style={{width: 90, height: 90}}/>
		<Text style={styles.textLoad}>Loading....</Text>
	</View>
);

export default Load;

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: '#394264',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textLoad: {
		color: '#cc324b',
		fontSize: 35,
	}
});