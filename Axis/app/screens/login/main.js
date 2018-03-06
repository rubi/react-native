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
import postal from 'postal';

import { FormLabel, FormInput } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { styles } from './main.style';
const {
	width,
	height
} = Dimensions.get('window');

export default class LoginScreen extends Component {

	constructor(){
		super();
	}

	componentDidMount(){

	}

	changeText(){

	}

	jumpToHome(){
		let loginStatusPostal = postal.channel('loginStatus');
		loginStatusPostal.publish("login.status", {'isSuccess': true});
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<FormLabel
						labelStyle={{fontSize: 15}}
						fontFamily="bold">Username</FormLabel>
					<FormInput onChangeText={this.changeText.bind(this)}/>
				</View>
				<View>
					<FormLabel
						secureTextEntry={true}
						labelStyle={{fontSize: 15}}
						fontFamily="bold">Password</FormLabel>
					<FormInput onChangeText={this.changeText.bind(this)}/>
				</View>
				<View style={{width: width,padding: 20}}>
					<Button
						buttonStyle={{height: 40, backgroundColor: '#5a66d1'}}
						title='Sign In'
						onPress={this.jumpToHome.bind(this)}/>
				</View>
			</View>
		)
	}
}