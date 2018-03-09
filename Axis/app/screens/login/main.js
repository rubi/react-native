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
import { observer, inject } from 'mobx-react';
import Snackbar from 'react-native-snackbar';

import { FormLabel, FormInput, Button } from 'react-native-elements';
import { styles } from './main.style';
const {
	width,
	height
} = Dimensions.get('window');

@inject('accountStore')
@observer
export default class LoginScreen extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: null,
			password: null
		}
	}

	componentDidMount(){

	}

	submitLogin(){
		const { accountStore } = this.props;
		accountStore.login(this.state.username, this.state.password).then(
			(data)=>{

			},
			(data)=>{
				Snackbar.show({
					title: 'username or password wrong',
					duration: Snackbar.LENGTH_SHORT,
					action: {
						title: 'CANCEL',
						color: '#000000',
						onPress: () => {

						},
					},
					backgroundColor: '#FF4500'
				});
			}
		);
	}

	render() {
		const { accountStore } = this.props;
		return (
			<View style={styles.container}>
				<View>
					<FormLabel
						labelStyle={{fontSize: 15}}
						fontFamily="bold">Username</FormLabel>
					<FormInput onChangeText={(username) => this.setState({username})}/>
				</View>
				<View>
					<FormLabel
						labelStyle={{fontSize: 15}}
						fontFamily="bold">Password</FormLabel>
					<FormInput onChangeText={(password) => this.setState({password})}/>
				</View>
				<View style={{width: width,padding: 20}}>
					<Button
						buttonStyle={{height: 40, backgroundColor: '#5a66d1'}}
						title='Sign In'
						onPress={this.submitLogin.bind(this)}/>
				</View>
			</View>
		)
	}
}