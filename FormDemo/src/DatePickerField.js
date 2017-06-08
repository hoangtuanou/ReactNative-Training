import React, { Component } from 'react';

import {
	View,
	Text,
	StyleSheet,
	DatePickerAndroid,
	TouchableHighlight
} from 'react-native';
import DatePicker from './DatePicker';

export default class DatePickerField extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<DatePicker
        date={this.state.}
      />
		);
	}
}

const styles = StyleSheet.create({
	picker: {

	}
});