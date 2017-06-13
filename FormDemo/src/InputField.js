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
  handleChangeText() {
    const { text } = this.state;
    this.setState({ isValid: this.validate(text) }, () => {
      this.props.handleTriggerValidation(this.state.isValid);
    });
    this.props.onChange(this.props.fieldRef, text);
  }
  handleBlur() {
    if (!this.props.isRequired && this.state.text.length === 0) {
      this.setState({ isValid: true, isShow: false });
    } else {
      this.handleChangeText();
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
    if (textLength > max || textLength < min || isRequired && textLength === 0) {
      isValid = false;
    }
    return isValid;
  }

  render() {
    return (
      <View
        style={[styles.inputWrapper, {borderBottomColor: this.state.isValid ? 'grey' : 'red'}]}
      >
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          placeholderTextColor='grey'
          autoCorrect={false}
          onChangeText={(text) => {
            this.setState({ text }, () => this.handleChangeText())
          }}
          onBlur={this.handleBlur}
          underlineColorAndroid='transparent'
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
    alignItems: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 4
  },
  input: {
    flex: 1,
    marginBottom: -10
  }
});