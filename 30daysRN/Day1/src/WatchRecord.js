import React,{Component} from 'react';
import {
	View, Text, StyleSheet, ListView
} from 'react-native';
import Util from './utils';

export default class WatchRecord extends Component{
	render() {
		let ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1!==r2});
		return (
			<ListView
				style={styles.recordList}
				dataSource={ds.cloneWithRows(this.props.record)}
				renderRow= {(rowData)=>
					<View style={styles.recordItem}>
						<Text style={styles.recordItemTitle}>{rowData.title}</Text>
						<View style={{alignItems: 'center'}}>
							<Text style={styles.recordItemTime}>{rowData.time}</Text>
						</View>
					</View>
				}
			/>
		)
	}
}

const styles = StyleSheet.create({
	recordList:{
    width: Util.size.width,
    height: Util.size.height - 300,
    paddingLeft: 15,
  },
  recordItem:{
    height: 40,
    borderBottomWidth:Util.pixel,borderBottomColor:"#bbb",
    paddingTop: 5, paddingLeft: 10, paddingRight:10, paddingBottom:5,
    flexDirection:"row",
    alignItems:"center"
  },
  recordItemTitle:{
    backgroundColor:"transparent",
    flex:1,
    textAlign:"left",
    paddingLeft:20,
    color:"#777"
  },
  recordItemTime:{
    backgroundColor:"transparent",
    flex:1,
    textAlign:"right",
    paddingRight:20,
    color:"#222"
  }
})