import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {

  render() {
    return (
    	<View style={styles.title}>
    		<Text style={styles.text}>
    			Todo List
    		</Text>
    	</View>
    )
  }
}

const styles = StyleSheet.create({
	title: {
		backgroundColor: 'cyan',
		padding: 15
	},
	text: {
		color: '#FFFFFF',
		textAlign: 'center'
	}
})
