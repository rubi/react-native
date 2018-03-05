import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Button
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { styles } from './main.style';

let navigator;
export default class UpcomingClassScreen extends React.Component {

	constructor(props){
		super(props)
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
	}

	toggleDrawer(){
		this.props.navigator.toggleDrawer({
			side: 'left',
			animated: true
		});
	}

	onNavigatorEvent(event) {
		if (event.type == 'DeepLink') {
			if(event.link === 'toggleDrawEvent'){
				this.toggleDrawer();
			}
		}
	}

	componentWillMount() {
		navigator = this.props.navigator;
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Upcoming Class</Text>
			</View>
		);
	}

	componentWillUnmount() {
		navigator = null;
	}
}