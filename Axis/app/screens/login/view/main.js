import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Dimensions,
	FlatList
} from 'react-native';
import { observer, inject } from 'mobx-react';
import Snackbar from 'react-native-snackbar';

import { FormLabel, FormInput, Button } from 'react-native-elements';
import { styles } from './main.style';
const {
	width,
	height
} = Dimensions.get('window');
import NetworkHint from '../../common/network/hint/main';

@inject('accountStore')
@observer
export default class LoginScreen extends NetworkHint {

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
					backgroundColor: '#FF4500'
				});
			}
		);
	}

	render() {
		const { accountStore } = this.props;
		return (
			<View style={styles.container}>
				{super.render()}
				<View style={{flex: 1, justifyContent: 'center'}}>
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
			</View>
		)
	}
}