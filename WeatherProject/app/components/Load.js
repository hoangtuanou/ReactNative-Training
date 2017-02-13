import React,{Component} from 'react';
import {
	View, Text, StyleSheet
} from 'react-native';

const Load = () => (
	<View style={styles.container}>
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