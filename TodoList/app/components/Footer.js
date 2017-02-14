import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class Footer extends Component {
  render() {
    return (
  		<TouchableOpacity style={styles.footer}>
  			<Text style={styles.text}>
  				Remove completed items
  			</Text>
  		</TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
	footer: {
		paddingVertical: 15,
		alignItems: 'center'
	},
	text: {
		color: '#CD5C5C'
	}
})
