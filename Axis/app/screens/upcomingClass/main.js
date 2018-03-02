import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Dimensions,
	FlatList
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getDomain } from '../../config/domain';
import { FormLabel, FormInput } from 'react-native-elements';

import { styles } from './main.style';
const {
	width,
	height
} = Dimensions.get('window');

export default class UpcomingClassScreen extends Component {

	constructor(){
		super();
	}

	componentDidMount(){

	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Upcoming Class</Text>
			</View>
		)
	}
}