import React from 'react';
import {
	View,Text
} from 'react-native';

const Title = (props) => (
	<View style={{backgroundColor: 'cyan',alignItems:'center'}}>
		<Text>{props.children}</Text>
	</View>
)

export default Title;