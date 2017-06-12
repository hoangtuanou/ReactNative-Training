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
    this.state={
      date: '',
    }
	}

	render() {
		return (
			<DatePicker
        {...this.props}
        date={this.state.date}
        onChange={(date) => this.setState({ date })}
      />
		);
	}
}

const styles = StyleSheet.create({
	picker: {

	}
});