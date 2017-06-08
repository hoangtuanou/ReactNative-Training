import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function validateValueInput(value) {
	console.log(value);
	const re = /^[A-Za-z]+$/;
	return !!value.match(re);
}

export default class InputField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valueText: '',
			isValid: true,
			isShow: false
		};
		this.triggerValidation = this.triggerValidation.bind(this);
	}

	triggerValidation() {
    this.setState({ isValid: this.validate(this.state.value) }, () => {
    	if (!this.props.isRequired && this.state.valueText.length === 0) this.setState({ isShow: false });
    });
  }

	validate() {
		const { isRequired, max, keyboardType } = this.props;
		const text = this.state.valueText;
		this.setState({ isShow: true })
		if (keyboardType === 'email-address') {
			return validateEmail(text);
		}
		if (text.length > max || isRequired && text.length === 0) {
			return false;
		} else if (keyboardType !== 'numeric') {
			return validateValueInput(text);
		}
		return true;
	}

	render() {
		return (
			<View
				style={styles.inputWrapper}
			>
				<TextInput
					style={styles.input}
					onChangeText={(text) => {
						this.setState({ valueText: text}, () => this.triggerValidation());
					}}
					onBlur={this.triggerValidation}
					underlineColorAndroid={this.state.isValid ? 'grey' : 'red'}
					keyboardType={this.props.keyboardType || 'default'}
				/>
				{
					this.state.isShow ?
						this.state.isValid ?
							<Image
								style={styles.icons}
								source={require('./icons/checkmark_circled_icon.png')}
							/> : <Image
											style={styles.icons}
											source={require('./icons/close_circled_icon.png')}
										/> : null
				}
			</View>
		);
	}
}

InputField.defaultProps = {
	isRequired: false,
	max: 10,
	keyboardType: 'default'
};

const styles = StyleSheet.create({
	inputWrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		flex: 1,
	},
	icons: {
		position: 'absolute',
		right: 10,
		width: 20,
		height: 20
	}
});