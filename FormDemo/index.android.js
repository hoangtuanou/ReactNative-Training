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
  Button,
  ScrollView,
} from 'react-native';
import Form from './src/Form';
import InputField from './src/InputField';
import DatePickerField from './src/DatePickerField';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateValueInput(value) {
  const re = /^[A-Za-z]+$/;
  if (value.length !== 0)
    console.log('validateValueInput', value.match(/\d+/g));
    return (value.match(/\d+/g) == null) ? true : false;
  return true;
}

export class FormDemo extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    console.log('form', this.form);
    console.log('firstName', this.firstName);
    return (
      <View>
        <Form
          ref={node => this.form=node}
        >
          <Text style={styles.title}>Informations client</Text>
          <InputField
            ref={node => this.firstName = node}
            placeholder='Nom *'
            max={50}
            isRequired={true}
            onValidateFunctions={[validateValueInput]}
          />
          <InputField
            placeholder='Prenoms *'
            max={50}
            isRequired={true}
            onValidateFunctions={[validateValueInput]}
          />
          <InputField
            placeholder='Telephone mobile *'
            max={10}
            keyboardType='numeric'
            isRequired={true}
          />
          <InputField
            placeholder='Telephone fixe'
            max={10}
            keyboardType='numeric'
          />
          <InputField
            placeholder='Email *'
            isRequired={true}
            max={50}
            keyboardType='email-address'
            onValidateFunctions={[validateEmail]}
          />
          <Text style={styles.title}>Adresse</Text>
          <InputField
            placeholder='Adresse'
            min={65}
          />
          <InputField
            placeholder="Complement d'dresse"
            max={50}
          />
          <DatePickerField
            placeholder='Date de naissance'
            isRequired={true}
          />
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Button
              title='submit'
              onPress={() => console.log('submit')}
            >Submit</Button>
          </View>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#0490C6',
    fontWeight: '800',
    paddingVertical: 20
  }
});

AppRegistry.registerComponent('FormDemo', () => FormDemo);
