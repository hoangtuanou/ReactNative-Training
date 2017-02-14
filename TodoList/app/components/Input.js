import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

export default class Input extends Component {
  state = {text: ''}

  onChangeText = (text) => {
    this.setState({text});
  }

  onSubmitEditing = () => {
    const {onSubmit} = this.props;
    const {text} = this.state;

    if(!text) return;
    onSubmit(text);
    this.setState({text: ''});
  }

  render() {
    const {text} = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputText}
          underlineColorAndroid='transparent'
          placeholder='Type here, then enter'
          value={text}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}
          blurOnSubmit={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputText: {
    padding: 15,
    height: 50
  }
})
