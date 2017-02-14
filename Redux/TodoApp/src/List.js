import React, {Component} from 'react';
import {
	View, TouchableWithoutFeedback, Text, StyleSheet, Animated
} from 'react-native';

export default class List extends Component{


	animationAdd = () => {
		Animated.
	}

	render(){
		const {list} = this.props;
		return(
			<View>
				{
					list.map((text,i)=>{
						const {onPressItem} = this.props;
						return (
							<TouchableWithoutFeedback
								key={i}
								onPress={()=>{
										onPressItem(i);
									}
								}
							>
								<Animated.View
									ref="view"
									style={styles.item}
									animation={'lightSpeedIn'}
									delay={i*500}
								>
									<Text>{text}</Text>
								</Animated.View>
							</TouchableWithoutFeedback>
						)
					})
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  }
})