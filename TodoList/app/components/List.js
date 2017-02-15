import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

export default class List extends Component {

	createItem = (item,i) => {
		const {onToggle,onRemoveItem} = this.props;
		return (
			<View
				key={i}
				style={styles.itemWrapper}
			>
				<Text style={{textDecorationLine:item.completed?'line-through':'none'}}>{item.label}</Text>
				<View style={styles.rightFeatures}>
					<Checkbox
						onToggle={()=>onToggle(i)}
						isChecked={item.completed}
					/>
					<TouchableOpacity onPress={()=>onRemoveItem(i)}>
						<Text style={styles.remove}>&times;</Text>
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
		paddingVertical: 15,
		paddingHorizontal: 15
	},
	rightFeatures: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	remove: {
		color: '#CD5C5C',
		fontSize: 26,
		marginLeft: 10
	}
})