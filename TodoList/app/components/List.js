import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

export default class List extends Component {

	createItem = (item,i) => {
		const {onToggle} = this.props;
		return (
			<View
				key={i}
				style={styles.itemWrapper}
			>
				<Text>{item.label}</Text>
				<View style={styles.rightFeatures}>
					<Checkbox
						onToggle={onToggle}
						isChecked={item.completed}
					/>
					<TouchableOpacity>

					</TouchableOpacity>
				</View>
			</View>
		)
	}

  render() {
		const {items} = this.props;
    return (
    	<ScrollView style={styles.listWrapper}>
    		{
					items.map(this.createItem)
				}
    	</ScrollView>
    )
  }
}

const styles = StyleSheet.create({
	listWrapper: {
		flex: 1
	},
	itemWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderColor: 'whitesmoke',
		borderWidth: 1,
		paddingVertical: 15
	},
	rightFeatures: {

	}
})