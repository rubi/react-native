import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { styles } from './main.style';
import { Button } from 'react-native-elements';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

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

	}

	componentWillUnmount() {

	}

	jumpToClassDetail(){
		this.props.navigator.push({
			screen: "Axis.Class.Detail",
			title: "Class Detail"
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Button
					buttonStyle={{height: 40,backgroundColor: "#000000"}}
					title="I am PL"
					onPress={this.jumpToClassDetail.bind(this)}
				/>
			</View>
		);
	}


}