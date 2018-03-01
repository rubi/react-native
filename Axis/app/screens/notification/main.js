import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Dimensions
} from 'react-native';
import { styles } from './main.style';
import { Button } from 'react-native-elements';

export default class NotificationScreen extends React.Component {

	disagreeNotification(){
		this.props.onClose();
	}

	agreeNotification(){
		this.props.onClose();
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{flex: 1}}>
					<Text style={styles.title}>{this.props.title}</Text>
					<Text style={styles.content}>{this.props.content}</Text>
				</View>
				<View style={styles.buttonArea}>
					<View style={styles.wrap}>
						<Button
							color="#000000"
							backgroundColor="#FFFFFF"
							fontSize={20}
							title='No'
							onPress={this.disagreeNotification.bind(this)}/>
					</View>
					<View style={styles.wrap}>
						<Button
							color="#000000"
							backgroundColor="#FFFFFF"
							fontSize={20}
							title='Yes'
							onPress={this.agreeNotification.bind(this)}/>
					</View>
				</View>
			</View>
		);
	}
}
