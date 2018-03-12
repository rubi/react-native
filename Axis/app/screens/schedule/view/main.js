import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Dimensions,
	FlatList
} from 'react-native';
import NetworkHint from '../../common/network/hint/main';
import { observer } from 'mobx-react';

import { styles } from './main.style';
const {
	width,
	height
} = Dimensions.get('window');

@observer
export default class ScheduleScreen extends NetworkHint {

	constructor(props){
		super(props);
	}

	componentDidMount(){

	}

	render() {
		return (
			<View style={styles.container}>
				{super.render()}
				<Text>Schedule</Text>
			</View>
		)
	}
}