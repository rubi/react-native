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
import SplashScreen from 'react-native-splash-screen';

const { width, height } = Dimensions.get('window');

export default class WelcomeScreen extends Component {

	constructor(){
		super();
		this.state={
			isClosedNotification: false
		};
	}

	componentDidMount(){
		SplashScreen.show();
		setTimeout(()=>{
			this.showNotificationsLightBox()
		}, 2000);
	}

	showNotificationsLightBox(){
		this.props.navigator.showLightBox({
			screen: 'Axis.LightBox.Notification',
			passProps: {
				title: '"EF AXIS" would like to send you notifications',
				content: 'Notifications may include alerts. sounds, and icon badges. These can be configured in settings.',
				onClose: this.dismissNotificationsLightBox.bind(this),
			},
			style: {
				backgroundBlur: 'dark',
				backgroundColor: 'rgba(0, 0, 0, 0.7)',
				tapBackgroundToDismiss: true
			}
		});
	};

	dismissNotificationsLightBox(){
		this.props.navigator.dismissLightBox();
		this.setState({
			isClosedNotification: true
		});
		SplashScreen.hide();
	}

	getTemplate(){
		if(this.state.isClosedNotification){
			return (
				<View>
					<Text>Welcome to axis mobile.</Text>
				</View>
			)
		}else{
			return (
				<Text>Welcome to axis mobile.</Text>
			)
		}
	}

	render() {
		return (
			<View style={styles.container}>
				{this.getTemplate()}
			</View>
		)


	}
}