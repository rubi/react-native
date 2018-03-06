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
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import { getDomain } from '../../../config/domain';

import {Navigation} from 'react-native-navigation';
import { styles } from './updateScreen.style';

const {
	width,
	height
} = Dimensions.get('window');

export default class NavBarUpdateButtonScreen extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){

	}

	jumpToDrawer(){
		//Navigation.handleDeepLink({link: 'toggleDrawEvent'});
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
				 style={[styles.buttonContainer]}
				 onPress={this.jumpToDrawer.bind(this)}
				 >
					 <View style={styles.button}>
					 	<IonicIcons name="md-refresh" size={30} color="#000000" />
					 </View>
				 </TouchableOpacity>
			</View>
		)
	}
}