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
import { styles } from './main.style';
const {
	width,
	height
} = Dimensions.get('window');

export default class MenuScreen extends Component {

	constructor(){
		super();
	}

	componentDidMount(){

	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Login to axis.</Text>
			</View>
		)
	}
}