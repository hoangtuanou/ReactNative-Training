import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../redux/todoRedux'
import Title from '../components/Title'
import Footer from '../components/Footer'
import List from '../components/List'
import Input from '../components/Input'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  onSubmit = (text) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.addItem(text));
  }
  onToggle = (i) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.toggleItem(i));
  }
  onRemoveItem = (i) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.removeItem(i));
  }
  onRemoveCompleted = () => {
    const {dispatch} = this.props;
    dispatch(actionCreators.removeItemCompleted());
  }
  render() {
    const {items} = this.props;
    return (
      <View style={styles.container}>
        <Title/>
        <Input
          onSubmit={this.onSubmit}
        />
        <List
          onRemoveItem={this.onRemoveItem}
          onToggle={this.onToggle}
          items={items}
        />
        <Footer
          onRemoveCompleted={this.onRemoveCompleted}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
