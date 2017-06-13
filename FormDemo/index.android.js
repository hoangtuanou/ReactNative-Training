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
  const re =  /^([a-zA-Z ]+)$/;
  if (value.length !== 0)
    return re.test(value);
  return true;
}

export class FormDemo extends React.Component{
  constructor(props){
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress() {
    const isvalid = this.form.checkValid();
    if (isvalid) {
      const data = this.form.getValue();
      alert(JSON.stringify(data));
    } else {
      const childRefs = this.form.getChildRefs();
      childRefs.forEach((childRef) => {
        if (childRef && this[childRef]) {
          this[childRef].handleChangeText();
        }
      });
    }
  }
  render() {
    return (
      <View>
        <Form
          ref={node => this.form=node}
        >
          <Text style={styles.title}>Informations client</Text>
          <InputField
            fieldRef='firstName'
            ref={node => this.firstName = node}
            placeholder='Nom *'
            max={50}
            isRequired={true}
            onValidateFunctions={[validateValueInput]}
          />
          <InputField
            fieldRef='lastName'
            ref={node => this.lastName = node}
            placeholder='Prenoms *'
            max={50}
            isRequired={true}
            onValidateFunctions={[validateValueInput]}
          />
          <InputField
            fieldRef='telephoneMobile'
            ref={node => this.telephoneMobile = node}
            placeholder='Telephone mobile *'
            max={10}
            keyboardType='numeric'
            isRequired={true}
          />
          <InputField
            fieldRef='telephoneFixe'
            ref={node => this.telephoneFixe = node}
            placeholder='Telephone fixe'
            max={10}
            keyboardType='numeric'
          />
          <InputField
            fieldRef='email'
            ref={node => this.email = node}
            placeholder='Email *'
            isRequired={true}
            max={50}
            keyboardType='email-address'
            onValidateFunctions={[validateEmail]}
          />
          <Text style={styles.title}>Adresse</Text>
          <InputField
            fieldRef='address'
            ref={node => this.address = node}
            placeholder='Adresse'
            min={65}
          />
          <InputField
            fieldRef='complementAddress'
            ref={node => this.complementAddress = node}
            placeholder="Complement d'dresse"
            max={50}
          />
          <DatePickerField
            fieldRef='birthday'
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
              onPress={this.handlePress}
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
