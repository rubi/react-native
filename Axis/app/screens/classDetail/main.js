import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';

import { observer, inject } from 'mobx-react';

@inject('classDetailStore')
@observer
export default class ClassDetailScreen extends Component  {
	constructor(props){
		super(props);
	}

	render() {
		const { classDetailStore } = this.props;
		return (
			<View>
				{classDetailStore.todos.map((todo, index) => <Text key={index}>{todo.title}</Text>)}
			</View>
		)
	}
}