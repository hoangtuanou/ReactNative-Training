import React, { Component } from 'react';

import {
	View,
	Text,
	StyleSheet,
	DatePickerAndroid,
	TouchableHighlight
} from 'react-native';

function formatDate() {
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();
  return (d<9 ? '0'+d : d) + '/' + (m<9 ? '0'+m : m) + '/' + y;
}

export default class DatePicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPickerVisible: false
		};
		this.togglePicker = this.togglePicker.bind(this);
		this.handleValueChange = this.handleValueChange.bind(this);
	}
	async togglePicker(event) {
		try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: this.props.date || new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.handleValueChange(new Date(year,month,day));
        // Selected year, month (0-11), day
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
	}
	render() {
		return (
			<View>
				<TouchableHighlight
					style={styles.picker}
					onPress={this.togglePicker}
				>
					<View>
            <Text>Birthday</Text>
						<Text>{this.state.date ? formatDate(this.state.date) : null}</Text>
					</View>
				</TouchableHighlight>
				{
					this.state.isPickerVisible ?
						<DatePickerAndroid
							date={new Date()}
							onDateChange={this.handleValueChange}
						/> : null
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	picker: {

	}
});