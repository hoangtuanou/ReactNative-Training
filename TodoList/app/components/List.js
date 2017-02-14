import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

export default class List extends Component {

  render() {
    return (
    	<ScrollView style={styles.listWrapper}>
    		<Text>1</Text>
    		<Text>1</Text>
    		<Text>1</Text>
    		<Text>1</Text>
    		<Text>1</Text>
    	</ScrollView>
    )
  }
}

const styles = StyleSheet.create({
	listWrapper: {
		flex: 1
	}
})