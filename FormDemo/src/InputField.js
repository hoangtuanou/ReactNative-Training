import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import IconRight from './IconRight';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isValid: true,
      isShow: false
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleChangeText(text) { 
    this.setState({ isValid: this.validate(text), text }, () => {
      this.props.handleTriggerValidation(this.state.isValid);
    });
  }
  handleBlur() {
    if (!this.props.isRequired && this.state.text.length === 0) {
      this.setState({ isShow: false });
    } else {
      this.setState({ isShow: true });
    }
  }
  validate(text) {
    const { isRequired, max, min, keyboardType, onValidateFunctions } = this.props;
    const textLength = text.length;
    this.setState({ isShow: true })
    let isValid = true;
    if (onValidateFunctions) {
      onValidateFunctions.forEach((validateFunc) => {
        isValid = validateFunc(text);
      }); 
    }
    if (textLength > max || textLength < min) {
      isValid = false;
    }
    return isValid;
  }

  render() {
    return (
      <View
        style={styles.inputWrapper}
      >
        <TextInput
          ref={(node) => this.inputField = node}
          style={styles.input}
          placeholder={this.props.placeholder}
          placeholderTextColor='grey'
          onChangeText={(text) => this.handleChangeText(text)}
          onBlur={this.handleBlur}
          underlineColorAndroid={this.state.isValid ? 'grey' : 'red'}
          keyboardType={this.props.keyboardType || 'default'}
        />
        <IconRight
          isShow={this.state.isShow}
          isValid={this.state.isValid}
        />
      </View>
    );
  }
}

InputField.defaultProps = {
  isRequired: false,
  isValid: true,
  max: 300,
  min: 0,
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
  }
});