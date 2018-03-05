import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Dimensions,
	FlatList,
	TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getDomain } from '../../../config/domain';

import {Navigation} from 'react-native-navigation';
import { styles } from './navigatorLeftButton.style';

const {
	width,
	height
} = Dimensions.get('window');

export default class NavigatorLeftButtonScreen extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){

	}

	jumpToDrawer(){
		Navigation.handleDeepLink({link: 'toggleDrawEvent'});
	}

	render() {
		return (
			<TouchableOpacity
				style={[styles.buttonContainer]}
				onPress={this.jumpToDrawer.bind(this)}
			>
				<View style={styles.button}>
					<Ionicons name="md-list" size={30} color="#000000" />
				</View>
			</TouchableOpacity>
		)
	}
}