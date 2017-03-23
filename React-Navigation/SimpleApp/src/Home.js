import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {debounce} from 'lodash';
import Detail from './Detail';

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.goToDetail = debounce(this.goToDetail,200);
    this.state = {isDiable: false};
  }
  goToDetail(data) {
    this.props.navigation.navigate('Detail', {name: data.name});
    setTimeout(()=>{
      this.setState({isDiable: false})
    },2000);
    this.setState({isDiable: true});
  }
  renderItem(data, index) {
    const {navigation} = this.props;
    return(
      <TouchableOpacity
        key={index}
        onPress={()=>{this.goToDetail(data)}}
        style={styles.row}
        disabled={this.state.isDiable}
      >
        <Text>{data.name}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const datas = [
      {id:0, name: 'Batman'},
      {id:1, name: 'Superman'},
      {id:2, name: 'Flash'}
    ];
    return (
      <View>
        <Text>Home Page</Text>
        {
          datas.map(this.renderItem)
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    paddingVertical: 20,
    backgroundColor: '#E5E5E5',
    marginVertical: 2
  }
})
