import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Checkbox extends Component {
  render() {
    const {isChecked,onToggle} = this.props;
    return (
      <TouchableOpacity onPress={onToggle}>
        <View style={styles.box}>
          {
            isChecked && <View style={styles.inner}></View>
          }
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: 'black'
  },
  inner: {
    flex: 1,
    margin: 2,
    backgroundColor: 'black'
  }
})
