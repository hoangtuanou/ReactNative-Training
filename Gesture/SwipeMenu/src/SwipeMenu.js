import React, {Component} from 'react';
import {
	View, Text, StyleSheet, PanResponder, Dimensions
} from 'react-native';

const {width,height} = Dimensions.get('window');

export default class SwipeMenu extends Component{
	constructor() {
		super();
		this.state = {showdrop: false};
	}

	_initLeft = -0.7*width-10;
	_initOpacity = 0;
	_minleft = -0.7*width-10;
	_menuStyles = {};
	_dropStyles = {};

	componentWillMount() {
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderGrant: (e, gesture) => {
				this.setState({
					showdrop: true
				});
			},
			onPanResponderMove: (e, gesture) => {
				this._menuStyles.style.left = this._initLeft + gesture.dx;
				this._dropStyles.style.opacity = this._initOpacity + Math.pow(gesture.dx/(-this._minleft),0.5);
				this.updatePosition();
			},
			onPanResponderRelease: (e, gesture) => {
				if(this._menuStyles.style.left>(-width/2)){
					this._menuStyles.style.left  = 0;
					this._dropStyles.style.opacity = 1;
					this._initLeft = 0;
					this._initOpacity = 1;
				}
				if(this._menuStyles.style.left<(-width/2)||gesture.dx<0){
					this._menuStyles.style.left  = this._minleft;
					this._dropStyles.style.opacity = 0;
					this._initLeft = this._minleft;
					this._initOpacity = 0;
					this.setState({showdrop: false});
				}
				this.updatePosition();
			}
		});

		this._menuStyles = {
			style: {
				left: this._minleft
			}
		};

		this._dropStyles = {
			style: {
				opacity: 0
			}
		}
	}

	updatePosition() {
		this.menu.setNativeProps(this._menuStyles);
		this.drop.setNativeProps(this._dropStyles);
	}
	render() {
		return (
			<View>
				{this.state.showdrop?<View style={styles.drop} ref={(drop)=>{this.drop=drop;}}></View>:<View></View>}
				<View {...this.panResponder.panHandlers} style={styles.menuWrapper} ref={(menu)=>{this.menu=menu;}}>
					<View style={styles.menu}></View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	drop: {
		height,
		width,
		position: 'absolute',
		top:0,
		left: 0,
		opacity: 0,
		backgroundColor: 'rgba(0,0,0,0.6)'
	},
	menuWrapper: {
		width: 0.7*width+20,
		height,
		position: 'absolute',
		top: 0,
		left: -0.7*width-10,
		borderColor: 'red',
		borderWidth: 1
	},
	menu: {
		width: 0.7*width,
		height,
		backgroundColor:"#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 2
    }
	}
});