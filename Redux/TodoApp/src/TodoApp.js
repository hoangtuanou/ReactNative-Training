import React, {Component} from 'react';
import {View} from 'react-native';

import {actions} from './todoListRedux';
import Title from './Title';
import List from './List';
import Input from './Input';

export default class TodoApp extends Component{
	state={};

	componentWillMount(){
		const {store} = this.props;
		const {todos} = store.getState();
		this.setState({todos});
		this.unsubscribe = store.subscribe(()=>{
			const {todos} = store.getState();
			this.setState({todos});
		})
	}

	componentWillUnmount(){
		this.unsubscribe();
	}

	onAddTodo = (text) => {
		const {store} = this.props;
		store.dispatch(actions.add(text));
	}

	onRemoveTodo = (index) => {
		console.log(index);
		const {store} = this.props;
		store.dispatch(actions.remove(index));
	}

	render(){
		const {todos}=this.state;
		return (
			<View>
				<Title> To-Do List </Title>
				<Input
					placeholder={'Type a todo, then hit enter!'}
					onSubmitEditing={this.onAddTodo}
				/>
				<List
					list={todos}
					onPressItem={this.onRemoveTodo}
				/>
			</View>
		)
	}
} 