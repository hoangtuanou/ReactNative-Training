/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import InputField from './src/InputField';
import DatePickerField from './src/DatePickerField';

export class FormDemo extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <Text>First Name: </Text>
        <InputField
          isRequired={true}
        />
        <Text>Phone: </Text>
        <InputField
          keyboardType='numeric'
        />
        <Text>Email: </Text>
        <InputField
          isRequired={true}
          keyboardType='email-address'
        />
        <DatePickerField/>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('FormDemo', () => FormDemo);
